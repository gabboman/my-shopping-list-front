import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './shopping-list/list/list.component';
import { WelcomeComponent } from './shopping-list/welcome/welcome.component';
import { ListboxModule } from 'primeng/listbox';
import { FormBuilder, FormsModule } from '@angular/forms';
import {MegaMenuModule} from 'primeng/megamenu';
import {InputTextModule} from 'primeng/inputtext';
import {CheckboxModule} from 'primeng/checkbox';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import { AboutComponent } from './shopping-list/about/about.component';
import {ButtonModule} from 'primeng/button';
import {ToastModule} from 'primeng/toast';
import { MessageService } from 'primeng/api';



@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    WelcomeComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    ListboxModule,
    MegaMenuModule,
    InputTextModule,
    CheckboxModule,
    ProgressSpinnerModule,
    ButtonModule,
    ToastModule
  ],
  providers: [
    FormBuilder,
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
