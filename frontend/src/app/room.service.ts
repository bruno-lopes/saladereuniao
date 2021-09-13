import { Room } from './room';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  private baseUrl = 'http://localhost:8082/api/v1/rooms';

  constructor(private http: HttpClient) { }

  getRoom(id: number): Observable<any> {

    return this.http.get( `${this.baseUrl}/${id}`);
  }
  updateRoom(id: number, room: Room): Observable<any> {
    return this.http.put( `${this.baseUrl}/${id}`, room);
  }
 
  createRoom(room: Room): Observable<any> {
    return this.http.post( `${this.baseUrl}`, room);
  }
  deleteRoom(id: number): Observable<any> {
    return this.http.delete( `${this.baseUrl}/${id}`, {responseType: 'text'});
  }
  getRoomList(): Observable<any> {
    return this.http.get( `${this.baseUrl}`);
  }


}
