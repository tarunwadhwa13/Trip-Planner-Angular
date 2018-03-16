import { Component, OnInit ,Input} from '@angular/core';
import { FlightService,flight } from '../../services/flight.service'
import { Observable } from 'rxjs/Observable';



@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  
  providers:[FlightService]
})
export class SearchComponent implements OnInit {

  flightsAvailable:Array<flight>;
  @Input() selected:String;
  @Input() source:String;
  @Input() destination:String;
  @Input() toDate;
  @Input() fromDate;


  constructor(public myService:FlightService) {
    
  }


  ngOnInit() {
    this.selected="tab-oneWay";
    
  }

  getService(){
    this.myService.getFlight(this.source,this.destination,this.fromDate,this.toDate).subscribe((f:flight[])=>{
      console.log("Found Flights")
      


      this.flightsAvailable = f['flight'];
      
      
      
      
    });
  }

}
