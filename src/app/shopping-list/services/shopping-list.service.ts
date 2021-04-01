import { Injectable } from '@angular/core';
import { Item } from 'src/app/interfaces/item';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {

  constructor(
  ) { }

  async getList(id: number): Promise<Item[]> {
    let res: Item[] = [
      {
        name: 'onions',
        active: true
      }, {
        name: 'curry paste',
        active: true
      }, {
        name: 'cheddar',
        active: false
      }, {
        name: 'cilantro',
        active: false
      }, {
        name: 'albahaca',
        active: false
      }, {
        name: 'ice',
        active: true
      }
    ]
    return res;
  }

  async addItemToList(id: number, itemName: string): Promise<Item[]> {
    let res: Item[] = [
      {
        name: 'onions',
        active: true
      }, {
        name: 'curry paste',
        active: true
      }, {
        name: 'cheddar',
        active: false
      }, {
        name: 'cilantro',
        active: false
      }, {
        name: 'albahaca',
        active: false
      }, {
        name: 'ice',
        active: true
      }
    ]
    return res;
  }

  async checkItemInList(id: number, item: Item): Promise<Item[]> {
    let res: Item[] = [
      {
        name: 'onions',
        active: true
      }, {
        name: 'curry paste',
        active: true
      }, {
        name: 'cheddar',
        active: false
      }, {
        name: 'cilantro',
        active: false
      }, {
        name: 'albahaca',
        active: false
      }, {
        name: 'ice',
        active: true
      }
    ]
    return res;
  }
}
