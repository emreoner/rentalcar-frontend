import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RentalResponseModel } from '../models/rentalResponseModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RentalService {

  apiUrl = 'https://localhost:44359/api/rentals/getallwithdetails';
  constructor(private httpClient: HttpClient) {}

  getRentals():Observable<RentalResponseModel> {
    return this.httpClient.get<RentalResponseModel>(this.apiUrl);
  }
}
