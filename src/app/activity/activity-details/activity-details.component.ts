/// <reference types="@types/googlemaps" />

import {Component, OnInit} from '@angular/core';
import {Activity} from '../Activity';
import {ActivatedRoute, Router} from '@angular/router';
import {User} from '../../user/User';
import {UserService} from '../../user/user.service';
import {MapsAPILoader} from '@agm/core';
import {ActivityService} from '../activity.service';

@Component({
  selector: 'app-activity-details',
  templateUrl: './activity-details.component.html',
  styleUrls: ['./activity-details.component.css']
})
export class ActivityDetailsComponent implements OnInit {

  activity: Activity;
  id: string;
  author: boolean = false;
  member: boolean = false;
  members: User[] = [];
  fullAddress: string = '';

  constructor(private route: ActivatedRoute,
              private router: Router,
              protected user: UserService,
              private activityService: ActivityService,
              private mapsAPILoader: MapsAPILoader) {
  }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');

    this.activityService.getActivity(this.id).subscribe((activity) => {
      this.activity = activity;
      this.activity.date = new Date(activity.date);
      this.activityService.getMembers(this.id).subscribe((users) => {  //aMembers: ActivityMember[]
        /*for (let i = 0; i<aMembers.length; i++){
          this.members[i] = aMembers[i].user;
          this.members[i].bday = new Date(aMembers[i].user.bday);
        }*/

        this.members = users;
        for (let i = 0; i < users.length; i++) {
          this.members[i] = users[i];
          this.members[i].bday = new Date(users[i].bday);
          if (this.members[i].login == this.user.getLogin()) {
            this.member = true;
          }
        }

        if (this.activity.author == this.user.getLogin()) {
          this.member = false;
          this.author = true;
          console.info('author true');
        }

        //let placeId = 'EiRwbGFjIExpdGV3c2tpLCAyMC0wMDEgTHVibGluLCBQb2xhbmQiLiosChQKEgnVHuZHaFciRxE2UZhVYs_YtxIUChIJYUAVHhRXIkcRX-no9nruKFU';
        let placeId = this.activity.placeId;
        this.mapsAPILoader.load().then(() => {
          // console.info('przed getFull...');
          let geocoder = new google.maps.Geocoder();
          // console.info('geocoder');
          geocoder.geocode({'placeId': placeId}, (
            (results: google.maps.GeocoderResult[], status: google.maps.GeocoderStatus) => {
              if (status === google.maps.GeocoderStatus.OK) {
                // console.info('status ok');
                if (results[0]) {
                  // console.info('exists');
                  //todo ew nazwa
                  this.fullAddress = results[0].formatted_address;
                  // console.info('full: ' + this.fullAddress);
                }
              }
              // console.info('end geocode');
            }));
        });
      });
    });

  }

  addYourself() {
    this.activityService.addMember(this.activity.id, this.user.getID());
  }

  removeYourself() {
    this.activityService.removeMember(this.id, this.user.getID());
  }

  edit() {
    let link = '/edit-activity/' + this.id;
    this.router.navigate([link]);
  }

  delete() {
    if (confirm('Czy na pewno chcesz usunąć aktywność?')) {
      this.activityService.deleteActivity(this.id).subscribe(() => {
        this.router.navigate(['/']);
      });
    }
  }
}
