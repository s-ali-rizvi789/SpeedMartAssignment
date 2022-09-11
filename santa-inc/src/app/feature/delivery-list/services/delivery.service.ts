import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeliveryService {

  constructor(private http: HttpClient) { }

  getDeliveryList(): Observable<any> {
    return this.http.get<any>("../../../assets/santa-delivery-list.json");
  }
}
