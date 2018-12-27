import { Component } from '@angular/core';

import { DataService } from './shared/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  data;

  constructor(
    private dataService: DataService,
  ) {
    this.dataService.getData('data-home.json').subscribe(data => this.data = data);
  }

}
