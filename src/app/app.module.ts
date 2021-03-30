import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './shopping-list/list/list.component';
import { WelcomeComponent } from './shopping-list/welcome/welcome.component';
import { ListboxModule } from 'primeng/listbox';
import { FormsModule } from '@angular/forms';
import {MegaMenuModule} from 'primeng/megamenu';
import {InputTextModule} from 'primeng/inputtext';
import {CheckboxModule} from 'primeng/checkbox';



@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    ListboxModule,
    MegaMenuModule,
    InputTextModule,
    CheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
