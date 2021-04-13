import { Injectable } from '@angular/core';
import { Item } from 'src/app/interfaces/item';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {

  constructor(
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
      res = [
      ]
    }

    return res;
  }

  async addItemToList(id: number, itemName: string): Promise<Item[]> {
    let res: Item[] = await this.getList(id);
    let newName = true;
    res.forEach((elem: Item) => {
      if (elem.name.toLowerCase() === itemName.toLowerCase()) {
        newName = false;
      }
    });
    if (newName) {
      const newItem: Item = { name: itemName, active: false};
      res.push(newItem);
      if(id === 0){
        localStorage.setItem('datos', JSON.stringify(res));
      } else {
        // TODO network thing goes here
      }
    }


    return res;
  }

  async checkItemInList(id: number, item: Item): Promise<Item[]> {
    let res: Item[] = await this.getList(id);
    res.forEach((element: Item) => {
      if(element.name.toLowerCase() === item.name.toLowerCase()){
        element.active = item.active;
      }
    });
    if(id===0){
      localStorage.setItem('datos', JSON.stringify(res));
    } else {
      // TODO network
    }

    return res;
  }
}
