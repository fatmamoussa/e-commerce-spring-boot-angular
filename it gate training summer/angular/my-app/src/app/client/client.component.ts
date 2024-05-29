import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
client:any
p: number = 1;
term_search:any


  constructor(private clientservice:ClientService) { }

  ngOnInit(): void {
    this.getclient()
  }

  getclient(){
    this.clientservice.getclient().subscribe((res:any)=>{
      this.client=res
      console.log("client",this.client)
      
    })
  }
  deleteclient(id:any){
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085D6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.clientservice.deleteclient(id).subscribe((res:any)=>{console.log(res)
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
        this.getclient()
        })
      }
    })
  }

}
