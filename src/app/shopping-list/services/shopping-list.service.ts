import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Auth } from 'src/app/interfaces/auth';
import { Item } from 'src/app/interfaces/item';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {

  constructor(
    private messageService: MessageService
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
      // TODO network thing would go here
      console.log({'list id requested': id});
      res = [
      ]
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
        // TODO network thing goes here
      }
    }

    if(status) {
      this.messageService.add({severity:'success', summary:'Element added', detail:'Added ' + itemName + ' succesfully'});

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
      // TODO network
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
      // TODO network
    }

    if(status) {
      this.messageService.add({severity:'success', summary:'Element deleted', detail:'Deleted ' + name + ' succesfully'});

    }

    return res;
  }
}
