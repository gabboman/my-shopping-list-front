import { Component, OnInit } from '@angular/core';
import { Auth } from 'src/app/interfaces/auth';
import { ShoppingListService } from '../services/shopping-list.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
  loading = true;
  lists: Auth[] = [];
  showModal = false;
  newListPassword = '';
  newListName = '';
  modalLoading = false;

  constructor(
    private listService: ShoppingListService
  ) { }

  async ngOnInit(): Promise<void> {
    this.lists = await this.listService.getAvaiableLists();
    this.loading = false;
  }

  async displayModal() {
    this.showModal = true;
  }

  async createList(){
    this.modalLoading = true;
    await this.listService.createList(this.newListPassword, this.newListName);
    this.lists = await this.listService.getAvaiableLists();
    this.showModal = false;
    this.modalLoading = false;
    this.newListName = '';
    this.newListPassword = '';


  }

}
