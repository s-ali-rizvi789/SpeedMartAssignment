import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeliveryListComponent } from './delivery-list/components/delivery-list.component';
import { ToysFactoryComponent } from './toys-factory/components/toys-factory.component';
import { LegalComponent } from './legal/components/legal.component';
import { DisconnectComponent } from './disconnect/components/disconnect.component';
import { FeatureRoutingModule } from './feature-routing.module';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';



@NgModule({
  declarations: [DeliveryListComponent, ToysFactoryComponent, LegalComponent, DisconnectComponent],
  imports: [
    CommonModule,
    FeatureRoutingModule,
    MatTableModule,
    MatPaginatorModule
  ]
})
export class FeatureModule { }
