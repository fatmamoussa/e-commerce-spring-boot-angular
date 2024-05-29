import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-detailclient',
  templateUrl: './detailclient.component.html',
  styleUrls: ['./detailclient.component.css']
})
export class DetailclientComponent implements OnInit {

  id=this.activeroute.snapshot.params["id"]
  client:any
  constructor(private activeroute:ActivatedRoute,private clientservice:ClientService) { }

  ngOnInit(): void {
    console.log("id",this.id)
    this.getone()
  }
getone(){
  this.clientservice.getone(this.id).subscribe((res:any)=>{
  this.client=res
  console.log("client",this.client)
   } )
}
}
