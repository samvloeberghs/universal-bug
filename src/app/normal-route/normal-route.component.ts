import { Component } from '@angular/core';
import { DataService } from '../shared/data.service';

@Component({
  selector: 'app-lazy-route',
  templateUrl: './normal-route.component.html',
  styleUrls: ['./normal-route.component.scss'],
})
export class NormalRouteComponent {

  data;

  constructor(
    private dataService: DataService,
  ) {
    this.dataService.getData('data-normal-route.json').subscribe(data => this.data = data);
  }

}
