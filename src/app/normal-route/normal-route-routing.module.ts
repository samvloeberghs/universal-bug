import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { NormalRouteComponent } from './normal-route.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'normal-route',
        component: NormalRouteComponent,
      },
    ]),
  ],
  exports: [
    RouterModule,
  ],
})
export class NormalRouteRoutingModule {
}
