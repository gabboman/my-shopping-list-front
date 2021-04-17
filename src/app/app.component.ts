import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  items = [
    {
        label: 'Home', icon: 'pi pi-fw pi-home', routerLink: '/'
    },
    {
      label: 'About', icon: 'pi pi-fw pi-question-circle', routerLink: '/about'
    }
  ];

}
