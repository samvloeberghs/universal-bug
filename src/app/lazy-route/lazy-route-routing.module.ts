import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { LazyRouteComponent } from './lazy-route.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: LazyRouteComponent,
      },
    ]),
  ],
  exports: [
    RouterModule,
  ],
})
export class LazyRouteRoutingModule {
}
