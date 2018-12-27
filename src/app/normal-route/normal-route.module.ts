import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NormalRouteRoutingModule } from './normal-route-routing.module';
import { NormalRouteComponent } from './normal-route.component';

@NgModule({
  imports: [
    CommonModule,
    NormalRouteRoutingModule,
  ],
  declarations: [
    NormalRouteComponent,
  ],
})
export class NormalRouteModule {
}
