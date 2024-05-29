import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListproductService } from 'src/app/product.service';

@Component({
  selector: 'app-detailproduct',
  templateUrl: './detailproduct.component.html',
  styleUrls: ['./detailproduct.component.css']
})
export class DetailproductComponent implements OnInit {
  id=this.activeroute.snapshot.params["id"]
  listproduct:any
  constructor(private activeroute:ActivatedRoute,private listproductservice:ListproductService) { }

  ngOnInit(): void {
    console.log("id",this.id)
    this.getone()
  }
getone(){
  this.listproductservice.getone(this.id).subscribe((res:any)=>{
  this.listproduct=res
  console.log("listproduct",this.listproduct)
   } )
}

}
