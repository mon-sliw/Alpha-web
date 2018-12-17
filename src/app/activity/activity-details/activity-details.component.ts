/// <reference types="@types/googlemaps" />

import {Component, OnInit} from '@angular/core';
import {Activity} from '../Activity';
import {ActivatedRoute} from '@angular/router';
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
  members: User[];
  fullAddress: string = '';

  constructor(private route: ActivatedRoute,
              protected user: UserService,
              private activityService: ActivityService,
              private mapsAPILoader: MapsAPILoader) {
  }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');

    this.activityService.getActivity(this.id).subscribe((activity) => {
      this.activity = activity;
      this.activity.date = new Date(activity.date);
      //todo http get members
    });


    if (this.activity.author == this.user.getID()) {
      this.author = true;
    }

    console.info('przed api');
    let placeId = 'EiRwbGFjIExpdGV3c2tpLCAyMC0wMDEgTHVibGluLCBQb2xhbmQiLiosChQKEgnVHuZHaFciRxE2UZhVYs_YtxIUChIJYUAVHhRXIkcRX-no9nruKFU';  //todo zmień
    this.mapsAPILoader.load().then(() => {
      console.info('przed getFull...');
      let geocoder = new google.maps.Geocoder();
      console.info('geocoder');
      geocoder.geocode({'placeId': placeId}, (
        (results: google.maps.GeocoderResult[], status: google.maps.GeocoderStatus) => {
          if (status === google.maps.GeocoderStatus.OK) {
            console.info('status ok');
            if (results[0]) {
              console.info('exists');
              this.fullAddress = results[0].formatted_address;
              console.info('full: ' + this.fullAddress);
            }
          }
          console.info('end geocode');
        }));
    });
  }

  addYourself() {
    //todo http
  }

  removeYourself() {
    //todo http
  }
}
