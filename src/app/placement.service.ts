import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Placement } from './placement.model';   
@Injectable({
  providedIn: 'root'
})
export class placementService {

  private API = 'http://localhost:8081/placement';  

  constructor(private http: HttpClient) { }

  // Add a new placement
  createPlacement(placement:any): Observable<any> {
    return this.http.post(this.API,placement);
  }
  
  // Fetch all placement details
  getAllPlacement(): Observable<Placement[]> {
    return this.http.get<Placement[]>(this.API);
  }

  // Update a placement
  updatePlacement(placement:any): Observable<any> {
    return this.http.put(`${this.API}/${placement.id}`, placement);
  }

  // Delete a placement
  deletePlacement(placementid: number): Observable<any> {
    return this.http.delete(`${this.API}/${placementid}`);
  }
}
