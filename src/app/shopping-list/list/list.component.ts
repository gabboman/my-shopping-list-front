import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/interfaces/item';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  loading = true;
  itemList: Item[] = [];
  inputText: string = "";


  constructor(

  ) { }

  ngOnInit(): void {

    this.itemList = [
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

    this.loading = false;

  }

  onEnter() {
    this.itemList.push({name: this.inputText, active: false});
    this.inputText = '';
  }

}
