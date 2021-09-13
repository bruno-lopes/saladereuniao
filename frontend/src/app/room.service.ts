import { Room } from './room';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoomService {
  updateRoom(id: number, room: Room): Observable<Room> {
    throw new Error('Method not implemented.');
  }
  getRoom(id: number): Observable<Room> {
    throw new Error('Method not implemented.');
  }
  createRoom(room: Room): Observable<Room> {
    throw new Error('Method not implemented.');
  }
  deleteRoom(id: number): Observable<any> {
    throw new Error('Method not implemented.');
  }
  getRoomList(): Observable<Room[]> {
    throw new Error('Method not implemented.');
  }

  constructor() { }
}
