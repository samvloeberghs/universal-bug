import { Component } from '@angular/core';
import { DataService } from '../shared/data.service';

@Component({
  selector: 'app-lazy-route',
  templateUrl: './lazy-route.component.html',
  styleUrls: ['./lazy-route.component.scss'],
})
export class LazyRouteComponent {

  data;

  constructor(
    private dataService: DataService,
  ) {
    this.dataService.getData('data-lazy-route.json').subscribe(data => this.data = data);
  }

}
