import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Auth } from 'src/app/interfaces/auth';
import { Item } from 'src/app/interfaces/item';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {

  constructor(
    private messageService: MessageService,
    private http: HttpClient,
    private router: Router
  ) { }

  async getList(id: number): Promise<Item[]> {

    let res: Item[];
    if (id === 0) {
      if (localStorage.getItem('datos')) {
        res = JSON.parse(localStorage['datos']);
      } else {
        localStorage.setItem('datos', JSON.stringify([]));
        res = [];
      }

    } else {
      let password = this.getListPassword(id)
      if(password) {
        let formData: FormData = new FormData();
        formData.append('id', id.toString());
        formData.append('password', password);
        let response: any = await this.http.post(environment.url + '/getList', formData).toPromise();
        res= response['data'];
      } else {
        res = [];
      }
    }

    return res;
  }

  async addItemToList(id: number, itemName: string): Promise<Item[]> {
    let status = true;
    let res: Item[] = await this.getList(id);
    let newName = true;
    res.forEach((elem: Item) => {
      if (elem.name.toLowerCase() === itemName.toLowerCase()) {
        newName = false;
      }
    });
    if (newName) {
      const newItem: Item = { name: itemName, active: false };
      res.push(newItem);
      if (id === 0) {
        localStorage.setItem('datos', JSON.stringify(res));
      } else {
        let password = this.getListPassword(id)
        if(password) {
          let formData: FormData = new FormData();
          formData.append('id', id.toString());
          formData.append('password', password);
          formData.append('item', itemName)
          let response: any = await this.http.post(environment.url + '/addElement', formData).toPromise();
          res= response['data'];
        } else {
          res = [];
        }
      }
    }

    if(status) {
      this.messageService.add({severity:'success', summary:'Element added', detail:'Added ' + itemName + ' succesfully'});

    } else {
      this.messageService.add({severity:'error', summary:'something went wrong', detail:'Could not add ' + itemName + ' to the list'});

    }
    return res;
  }

  async checkItemInList(id: number, item: Item): Promise<Item[]> {
    let status = true;
    let res: Item[] = await this.getList(id);
    res.forEach((element: Item) => {
      if (element.name.toLowerCase() === item.name.toLowerCase()) {
        element.active = item.active;
      }
    });
    if (id === 0) {
      localStorage.setItem('datos', JSON.stringify(res));
    } else {
      let password = this.getListPassword(id)
        if(password) {
          console.log(item);
          let formData: FormData = new FormData();
          formData.append('id', id.toString());
          formData.append('password', password);
          formData.append('item', item.name);
          formData.append('active', item.active.toString());
          let response: any = await this.http.post(environment.url + '/updateElement', formData).toPromise();
          res= response['data'];
        } else {
          res = [];
        }
    }

    if(status) {
      this.messageService.add({severity:'success', summary:'Element updated', detail:'Updated ' + item.name + ' succesfully'});

    }

    return res;
  }

  // This one looks into the localStorage and returns the avaiable lists
  async getAvaiableLists(): Promise<Auth[]> {
    let res: Auth[] = [{
      id: 0,
      token: '',
      name: 'Local'
    }];
    if (localStorage.getItem('tokens')) {
      res= JSON.parse(localStorage.tokens);
      
    } else {
      localStorage.setItem('tokens', JSON.stringify(res))
    }
    return res;
  }

  async deleteItemInList(id: number, name: string): Promise<Item[]> {
    let status = true;
    let res: Item[] = await this.getList(id);
    let elementToDelete: number = -1;
    res.forEach((element: Item, index: number) => {
      if (element.name.toLowerCase() === name.toLowerCase()) {
        elementToDelete = index;
      }
    });
    if(elementToDelete != -1){
      res.splice(elementToDelete, 1);
    }
    
    if (id === 0) {
      localStorage.setItem('datos', JSON.stringify(res));
    } else {
      let password = this.getListPassword(id)
      if(password) {
        let formData: FormData = new FormData();
        formData.append('id', id.toString());
        formData.append('password', password);
        formData.append('item', name);
        let response: any = await this.http.post(environment.url + '/removeElement', formData).toPromise();
        res= response['data'];
      } else {
        res = [];
      }
    }

    if(status) {
      this.messageService.add({severity:'success', summary:'Element deleted', detail:'Deleted ' + name + ' succesfully'});

    }

    return res;
  }

  async createList(password: string, name: string): Promise<void> {
    let data = new FormData();
    data.append('password', password);
    data.append('name', name);
    let response: any = await this.http.post(environment.url + '/createList', data).toPromise();
    console.log(response);
    let tokens: Auth[] = JSON.parse(localStorage.tokens);
    tokens.push({name: name, token: password, id: response.newListId});
    localStorage.setItem('tokens', JSON.stringify(tokens))

  }

  getListPassword(id: number) {

    let pass;
    let tokens: Auth[] = JSON.parse(localStorage.tokens);
    tokens.forEach(elem => {
      if(elem.id === id) {
        pass= elem.token
      }
    });
    if(pass) {
      return pass;
    } else {
      this.router.navigate(['/']);
      return null;
    }

  }
}
