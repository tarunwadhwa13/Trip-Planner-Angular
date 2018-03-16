import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';


export interface flight {
    airlines:String;
    source:city;
    destination:city;
    arrival_time:DateTimeFormat;
    departure_time:DateTimeFormat;
    cities:Array<city>;
  }
export interface city{
    name:String;
    
}

@Injectable()
export class FlightService{
    constructor(private http: HttpClient){}

    getFlight(source:String,destination:String,from,to) : Observable<flight[]>{
         //return this.http.get<flight[]>(' + source +'&dest=' + destination + '&from=' + from + '&to=' + to);
        return this.http.get<flight[]>('/api/flights/?source=' + source + '&dest=' + destination +  '&from=' + from);
    }
}