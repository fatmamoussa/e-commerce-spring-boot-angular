import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  userconnect=JSON.parse(localStorage.getItem("userconnect")!)
  constructor() { }

  ngOnInit(): void {
  }
  

}
