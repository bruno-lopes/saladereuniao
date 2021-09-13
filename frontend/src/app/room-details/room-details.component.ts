import { ActivatedRoute, Router } from '@angular/router';
import { RoomService } from './../room.service';
import { Component, OnInit } from '@angular/core';
import { Room } from '../room';

@Component({
  selector: 'app-room-details',
  templateUrl: './room-details.component.html',
  styleUrls: ['./room-details.component.css']
})
export class RoomDetailsComponent implements OnInit {

  id: number = 0;
  room: Room = new Room();

  constructor(private roomService: RoomService, private activatedRoute: ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.room = new Room();
    this.id = this.activatedRoute.snapshot.params['id'];
    this.roomService.getRoomById(this.id).subscribe(data => {
      console.log(data);
      this.room = data;
    }, error => console.log(error));
  }

  list(): void {
    this.router.navigate(['rooms']);

  }

}
