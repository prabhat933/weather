import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent implements OnInit {
public weathers;
public pincode = "" ;
  constructor(private dataservice: DataService,) { }

  ngOnInit() {
    this.getListingData();
  }
  getListingData() {
    let ids = "";
   this.dataservice
 .getData()
 .subscribe(data=> {
   this.weathers = data ;
   this.weathers.map(x =>(x["selected"]= false));
 })
    })
  }

}
