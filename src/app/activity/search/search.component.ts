/// <reference types="@types/googlemaps" />
import {Component, ElementRef, NgZone, OnInit, ViewChild} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {Activity} from '../Activity';
import {Router} from '@angular/router';
import {Category} from '../../admin/Category';
import {User} from '../../user/User';
import {ActivityService} from '../activity.service';
import {MapsAPILoader} from '@agm/core';

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
          console.info('placeID: ' + place.id);
          console.info('Address components: ' + place.address_components);

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
