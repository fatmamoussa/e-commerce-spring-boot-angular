import { Component, OnInit } from '@angular/core';
import { ListproductService } from 'src/app/product.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listproduct',
  templateUrl: './listproduct.component.html',
  styleUrls: ['./listproduct.component.css']
})
export class ListproductComponent implements OnInit {
  p: number = 1;
  listproduct:any
  term_search:any
  
  constructor(private listproductservice:ListproductService) { }

  ngOnInit(): void {
    this.getproducts()
  }
  getproducts(){
    this.listproductservice.getproducts().subscribe((res:any)=>{
      this.listproduct=res
      console.log("listproduct",this.listproduct)
    })
  }
  deleteproduct(id:any){
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
        this.listproductservice.deleteproduct(id).subscribe((res:any)=>{console.log(res)
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
        this.getproducts()
        })
      }
    })
  }


}
