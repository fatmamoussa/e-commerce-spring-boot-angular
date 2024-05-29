import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-listproduct',
  templateUrl: './listproduct.component.html',
  styleUrls: ['./listproduct.component.css']
})
export class ListproductComponent implements OnInit {
listproduct:any
p: number = 1;
term_search:any
  constructor(private productservice:ProductService) { }

  ngOnInit(): void {
    this.getproducts()
  }
  getproducts(){
    this.productservice.getproducts().subscribe((res:any)=>{
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
        this.productservice.deleteproduct(id).subscribe((res:any)=>{console.log(res)
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
