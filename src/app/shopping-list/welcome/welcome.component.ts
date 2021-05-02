import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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
  modalLoading = false;
  createListForm: FormGroup;
  constructor(
    private listService: ShoppingListService,
    private fb: FormBuilder
  ) { 
    this.createListForm = this.fb.group({
      name: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }

  async ngOnInit(): Promise<void> {
    this.lists = await this.listService.getAvaiableLists();
    this.loading = false;
  }

  async displayModal() {
    this.showModal = true;
  }

  async createList(){
    this.modalLoading = true;
    await this.listService.createList(this.createListForm.value.password, this.createListForm.value.name);
    this.lists = await this.listService.getAvaiableLists();
    this.showModal = false;
    this.modalLoading = false;
    this.createListForm.patchValue({
      name: '',
      password: ''
    });


  }

}
