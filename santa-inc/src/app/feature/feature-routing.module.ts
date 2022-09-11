import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeliveryListComponent } from './delivery-list/components/delivery-list.component';
import { DisconnectComponent } from './disconnect/components/disconnect.component';
import { LegalComponent } from './legal/components/legal.component';
import { ToysFactoryComponent } from './toys-factory/components/toys-factory.component';

const featureRoutes: Routes = [
  {
    path: '',
    redirectTo: '/delivery',
    pathMatch: 'full'
  },
  {
    path: 'delivery',
    component: DeliveryListComponent,
    pathMatch: 'full'
  },
  {
    path: 'toys-factory',
    component: ToysFactoryComponent,
    pathMatch: 'full'
  },
  {
    path: 'legal',
    component: LegalComponent,
    pathMatch: 'full'
  },
  {
    path: 'disconnect',
    component: DisconnectComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(featureRoutes)],
  exports: [RouterModule],
})
export class FeatureRoutingModule {}
