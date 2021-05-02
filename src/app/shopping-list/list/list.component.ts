import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Auth } from 'src/app/interfaces/auth';
import { Item } from 'src/app/interfaces/item';
import { ShoppingListService } from '../services/shopping-list.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  loading = true;
  showModal = false;
  modalLoading = true;
  listPassword = "";
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
    let avaiableLists: Auth[] = await this.shoppingListService.getAvaiableLists();
    let listAvaiable = false;
    avaiableLists.forEach ( elem => {
      if(elem.id === this.listId) {
        listAvaiable = true;
      }
    });

    if(listAvaiable) {
      await this.loadList()
    } else {
      this.showModal = true;
      this.modalLoading = false;
    }


  }

  async loadList() {
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
    this.inputText = '';
    this.loading = false;
  }

  async onDelete(name : string) {
    this.loading = true;

    this.itemList = await this.shoppingListService.deleteItemInList(this.listId, name);

    this.loading = false;
  }

  async authorize() {
    this.modalLoading = true;
    let success = await this.shoppingListService.checkListPassword(this.listId, this.listPassword);
    if(success) {
      this.loadList();
      this.showModal = false;
    }
    this.modalLoading = false;
  }

}
