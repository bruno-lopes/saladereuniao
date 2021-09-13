import { RoomDetailsComponent } from './../room-details/room-details.component';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Room } from '../room';
import { RoomService } from '../room.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.css']
})
export class RoomListComponent implements OnInit {

  constructor(private roomService: RoomService, private router: Router) {
      this.rooms = new Observable<Room[]>();

   }


  rooms: Observable<Room[]>;

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData() {
    this.rooms = this.roomService.getRoomList();

  }

  deleteRooms(id: number): void {
    this.roomService.deleteRoom(id).subscribe(
      data=> {
        console.log(data);
        this.reloadData();
      },
      error => console.log(error)
    );
  }

  roomDetails(id: number): void {
    this.router.navigate(['details', id]);
  }

  updateRoom(id: number) {
    this.router.navigate(['update', id]);
  }



}
