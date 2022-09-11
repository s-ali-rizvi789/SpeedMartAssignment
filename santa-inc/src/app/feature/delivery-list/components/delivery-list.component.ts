import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { WishRequest } from '../models/wish-request';
import { DeliveryService } from '../services/delivery.service';

@Component({
  selector: 'santa-inc-delivery-list',
  templateUrl: './delivery-list.component.html',
  styleUrls: ['./delivery-list.component.scss']
})
export class DeliveryListComponent implements OnInit, OnDestroy {
  subscription: Subscription
  dataSource: Array<WishRequest>;
  isLoading: boolean;
  displayedColumns: string[];
  totalData: Array<WishRequest>;
  pageSize: number;
  totalRowCount: number;
  currentPage: number;

  constructor(private deliveryService: DeliveryService) { }

  ngOnInit(): void {
    this.pageSize = 15;
    this.totalRowCount = 0;
    this.currentPage = 0;
    this.isLoading = true;
    this.displayedColumns= ['fName', 'lName', 'address', 'wishes'];
    this.subscription = this.deliveryService.getDeliveryList().subscribe(response => {
      if(response.deliveryList && response.deliveryList.result.length) {
        this.totalData = response.deliveryList.result;
        this.totalRowCount = this.totalData.length;
        this.dataSource = this.totalData.slice(this.currentPage, this.pageSize);
        this.isLoading = false;
      }
    })
  }

  onPageEvent(event) {
    if(this.pageSize === event.pageSize) {
      this.currentPage = event.pageIndex;
      this.dataSource = this.totalData.slice(this.currentPage * this.pageSize, (this.currentPage+1) * this.pageSize);
    } else {
      this.currentPage = 0;
      this.pageSize = event.pageSize;
      this.dataSource = this.totalData.slice(this.currentPage * this.pageSize, (this.currentPage+1) * this.pageSize);
    }
  }

  ngOnDestroy(): void {
    if(this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
