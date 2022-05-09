 import { Injectable } from '@angular/core';
 import { HttpClient  } from '@angular/common/http';
 import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  readonly APIUrl = "https://localhost:44379/api"

  constructor(private https: HttpClient) { }

  getAllCustomerList(): Observable<any[]>{
    return this.https.get<any>(this.APIUrl + "/Customer/GetAll")
  }

  getCustomerWithId(): Observable<any[]>{
    return this.https.get<any>(this.APIUrl + "/Customer/{Customer_Id}")
  }
  AddCustomer(val: any): Observable<any[]>{
    return this.https.post<any>(this.APIUrl + "/Customer/AddCustomer", val)
  }

DeleteCustomer(val: any): Observable<any[]>{
    return this.https.post<any>(this.APIUrl + "/Customer/GetAll", val)
  }

  UpdateCustomer(val: any): Observable<any[]>{
    return this.https.post<any>(this.APIUrl + "/Customer/GetAll", val)
  }
}
