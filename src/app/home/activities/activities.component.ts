import { Activity } from './activity.model';
import { ApisService } from './../../_services/apis.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.css']
})
export class ActivitiesComponent implements OnInit {
  activities: Activity[] = []

  constructor(public _api: ApisService) {
    this.getAllActivities()
  }

  getAllActivities() {
    this._api.getAllActivities().subscribe((activities: any) => {
      this.activities = activities.data
    })

  }
  ngOnInit(): void {
  }

}
