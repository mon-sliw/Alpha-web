/// <reference types="@types/googlemaps" />

import {Component, ElementRef, NgZone, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {ActivityService} from '../activity.service';
import {Category} from '../../admin/Category';
import {MapsAPILoader} from '@agm/core';
import {UserService} from '../../user/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-activity-add',
  templateUrl: './activity-add.component.html',
  styleUrls: ['./activity-add.component.css']
})
export class ActivityAddComponent implements OnInit {

  form = this.fb.group({
      name: ['', [Validators.required]],
      description: ['', [Validators.required]],
      category: ['', [Validators.required, Validators.minLength(1)]],
      place: ['', [Validators.required]],
      datetime: [(new Date(Date.now() + 3600000).toISOString()).substr(0, 16), [Validators.required]]
    }
  );

  categories: Category[];

  placeID: string = '';
  city: string = '';

  @ViewChild('place')
  public searchElementRef: ElementRef;

  constructor(private fb: FormBuilder,
              private activityService: ActivityService,
              private router: Router,
              private user: UserService,
              private mapsAPILoader: MapsAPILoader,
              private ngZone: NgZone) {
  }

  ngOnInit() {
    /*this.categories = [
      {id: 1, name: 'bla bla'},
      {id: 2, name: 'bvc,jmhngbvfdcsxacdvfbgnhjmk,l.o;k,jmhngbfvdcsxadsx'}
    ];*/
    this.activityService.getAllCategories().subscribe(
      categories => {
        this.categories = categories;
        console.info('got categories');
      });


    this.mapsAPILoader.load().then(() => {
      let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
        componentRestrictions: {country: 'pl'}
      });
      autocomplete.addListener('place_changed', () => {
        this.ngZone.run(() => {
          let place: google.maps.places.PlaceResult = autocomplete.getPlace();
          this.placeID = place.place_id;
          let locality = '';
          let administrative_area_level_2 = '';
          let administrative_area_level_1 = '';
          let country = '';

          for (let i = 0; i < place.address_components.length; i++) {
            if (place.address_components[i].types.includes('locality')) {
              locality = place.address_components[i].long_name;
            }
            if (place.address_components[i].types.includes('administrative_area_level_2')) {
              administrative_area_level_2 = place.address_components[i].long_name;
            }
            if (place.address_components[i].types.includes('administrative_area_level_1')) {
              administrative_area_level_1 = place.address_components[i].long_name;
            }
            if (place.address_components[i].types.includes('country')) {
              country = place.address_components[i].long_name;
            }
          }
          this.city = locality + ' ' + administrative_area_level_2 + ' ' + administrative_area_level_1 + ' ' + country;
          console.info('city: ' + this.city);
        });
      });
    });
  }

  add() {
    const name = this.form.get('name').value;
    const description = this.form.get('description').value;
    const category = this.form.get('category').value;
    const datetime = new Date(this.form.get('datetime').value);
    this.activityService.add(name, description, category, datetime, this.city, this.placeID).subscribe(
      activity => {
        let link = '/activity/' + activity.id;
        this.router.navigate([link]);
      }, error => {
        //todo nie można dwóch w tym samym czasie
      });
  }
}
