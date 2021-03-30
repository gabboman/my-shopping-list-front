import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  items = [
    {
        label: 'Videos', icon: 'pi pi-fw pi-video'
    }
  ];

}
