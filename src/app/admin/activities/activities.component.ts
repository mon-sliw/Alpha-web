import {Component, OnInit} from '@angular/core';
import {faEdit} from '@fortawesome/free-solid-svg-icons';
import {Activity} from '../../activity/Activity';
import {ActivityService} from '../../activity/activity.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.css']
})
export class ActivitiesComponent implements OnInit {

  faEdit = faEdit;
  activities: Activity[];

  constructor(private activityService: ActivityService,
              private router: Router) { }

  ngOnInit() {
    this.activityService.search('').subscribe(activities=>{
      this.activities = activities;
      for(let i=0; i<activities.length; i++){
        this.activities[i].date = new Date(activities[i].date);
      }
    })
  }

  edit(activity: Activity){
    let link = '/admin/activities/edit/'+activity.id;
    this.router.navigate([link]);
  }

}
