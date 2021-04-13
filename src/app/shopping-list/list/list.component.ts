import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Item } from 'src/app/interfaces/item';
import { ShoppingListService } from '../services/shopping-list.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  loading = true;
  filter = false;
  itemList: Item[] = [];
  oldItemList: Item[] = [];
  inputText: string = "";
  listId: number = 0;


  constructor(
    private shoppingListService: ShoppingListService,
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
  ) { }

  async ngOnInit(): Promise<void> {
    this.listId = parseInt(this.activatedRoute.snapshot.params.id);
    this.itemList = await this.shoppingListService.getList(this.listId);
    // this way we don't get a reference but a copy
    this.oldItemList = JSON.parse(JSON.stringify(this.itemList));
    this.loading = false;

  }

  async onEnter() {
    this.loading = true;

    this.itemList = await this.shoppingListService.addItemToList(this.listId,this.inputText);
    this.oldItemList = JSON.parse(JSON.stringify(this.itemList));
    // should we clean the text once it's added?
    this.inputText = '';
    this.loading = false;

  }

  async onChange(ev: any) {
    this.loading = true;
    let itemToChange: Item = this.itemList[0];
    this.itemList.forEach((item, index) => {
      if(item.active !== this.oldItemList[index].active){
        itemToChange = item;
      }
    });

    this.itemList = await this.shoppingListService.checkItemInList(this.listId, itemToChange);
    this.oldItemList = JSON.parse(JSON.stringify(this.itemList));

    this.loading = false;
  }

}
