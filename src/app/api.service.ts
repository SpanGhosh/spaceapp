import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http : HttpClient) { }

  landingData : Observable<any>

  landingPageData() : Observable<any>{
    if(!this.landingData){
      this.landingData = this.http.get("https://api.spacexdata.com/v3/launches?limit=100")
    }
    return this.landingData
  }
  filterYearData(year) : Observable<any>{
    return this.http
    .get(`https://api.spacexdata.com/v3/launches?limit=100&amp;launch_success=true&amp;land_success=true&amp;launch_year=${year}`)
  }
  filterLaunchSuccess(val) : Observable<any>{
    return this.http.get(`https://api.spacexdata.com/v3/launches?limit=100&amp;launch_success=${val}`)
  }
  filterLaunchandLand(val) : Observable<any>{
    return this.http.get(`https://api.spacexdata.com/v3/launches?limit=100&amp;launch_success=${val}&amp;land_success=${val}`)
  }
}
