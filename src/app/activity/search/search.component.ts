/// <reference types="@types/googlemaps" />

import {Component, ElementRef, NgZone, OnInit, ViewChild} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {Activity} from '../Activity';
import {Router} from '@angular/router';
import {Category} from '../../admin/Category';
import {User} from '../../user/User';
import {ActivityService} from '../activity.service';
import {MapsAPILoader} from '@agm/core';
import {forEach} from '@angular/router/src/utils/collection';

// import {} from 'googlemaps';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  form = this.fb.group({
    searchWords: ['', []],
    category: ['', []],
    somethingElse: ['', []],
    date: ['', []]
  });

  categories: Category[];

  activities: Activity[];
  searchDone = false;

  city: string = '';
  placeID: string = '';

  @ViewChild('somethingElse')
  public searchElementRef: ElementRef;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private activityService: ActivityService,
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone) {
  }

  ngOnInit() {
    this.activityService.getAllCategories().subscribe(
      categories => {
        this.categories = categories;
        console.info('got categories');
      });


    this.mapsAPILoader.load().then(() => {
      let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
        types: ['(cities)'],
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
          this.city = locality+' '+administrative_area_level_2+' '+administrative_area_level_1+' '+country;
        });
      });
    });

  }

  search() {
    //todo http
    this.searchDone = true;
    this.activities = [{
      id: 1,
      name: 'Zagraj w tenisa',
      author: new User(),
      category: new Category(),
      city: 'Lublin',
      date: new Date('2018-12-12'),
      description: '',
      placeId: '',
      members: []
    },
      {
        id: 2,
        name: 'Mamma Mia w Multikinie',
        author: new User(),
        category: new Category(),
        city: 'Lublin',
        date: new Date('2018-12-07'),
        description: '',
        placeId: '',
        members: []
      }];
  }


  details(activity: Activity) {
    const id = activity.id;
    this.router.navigate(['/activity/' + id]);
  }
}
