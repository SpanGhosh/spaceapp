import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';
import {mergeMap} from 'rxjs/operators'

@Component({
  selector: 'rocket-detail-list',
  templateUrl: './rocket-detail-list.component.html',
  styleUrls: ['./rocket-detail-list.component.css']
})
export class RocketDetailListComponent implements OnInit {

  constructor(
    private apiService : ApiService,
    private router : Router,
    private route : ActivatedRoute) {
      this.router.routeReuseStrategy.shouldReuseRoute = ()=>{return false}
    }

  rocketData = []

  ngOnInit(): void {
    this.route.paramMap.pipe(
      mergeMap(param=>{
        let paramval = param.get("id")
        if(paramval){
          if(!isNaN(parseInt(paramval))){
            return this.apiService.filterYearData(paramval)
          }
          else{
            switch(paramval){
              case "launch-t":
                return this.apiService.filterLaunchSuccess("true")
              case "launch-f":
                return this.apiService.filterLaunchSuccess("false")
              case "land-t":
                return this.apiService.filterLaunchandLand("true")
              case "land-f":
                return this.apiService.filterLaunchandLand("false")
            }
          }
        }
        else{
          return this.apiService.landingPageData()
        }
      })
    ).subscribe(rocketval=>{
      this.rocketData = rocketval
    })
  }
}
