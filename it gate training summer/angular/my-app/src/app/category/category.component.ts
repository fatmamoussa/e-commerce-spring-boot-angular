import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
category:any
p: number = 1;
term_search:any

  constructor(private categoryservice:CategoryService) { }

  ngOnInit(): void {
    this.getcategory()
  }
getcategory(){
  
  this.categoryservice.getcategory().subscribe((res:any)=>{
    this.category=res
    console.log("category",this.category)
  })
}

deletecategory(id:any){
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
      this.categoryservice.deletecategory(id).subscribe((res:any)=>{console.log(res)
      Swal.fire(
        'Deleted!',
        'Your file has been deleted.',
        'success'
      )
      this.getcategory()
      })
    }
  })
}
}
