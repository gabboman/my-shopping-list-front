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

  constructor(
    private listService: ShoppingListService
  ) { }

  async ngOnInit(): Promise<void> {
    this.lists = await this.listService.getAvaiableLists();
    this.loading = false;
  }

}
