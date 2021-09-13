import { RoomService } from './../room.service';
import { Room } from './../room';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-create-room',
  templateUrl: './create-room.component.html',
  styleUrls: ['./create-room.component.css']
})
export class CreateRoomComponent implements OnInit {

  constructor(private roomService:RoomService, private router:Router) { }

  room: Room = new Room();

  submitted: boolean = false;

  ngOnInit(): void {
  }

  newRoom(): void {
    this.submitted = false;
    this.room = new Room();
  }

  save(){
    this.roomService.createRoom(this.room).subscribe(data=>console.log(data),
    error => console.log(error));
    this.room = new Room();
    this.gotoList();
  }
  gotoList() {
    this.router.navigate(['/rooms'])
  }
  
  submit() {
    this.submitted = true;
    this.save();
  }
}
