import {Component, ElementRef, NgZone, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {Category} from '../../admin/Category';
import {ActivityService} from '../activity.service';
import {UserService} from '../../user/user.service';
import {MapsAPILoader} from '@agm/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Activity} from '../Activity';

@Component({
  selector: 'app-activity-edit',
  templateUrl: './activity-edit.component.html',
  styleUrls: ['./activity-edit.component.css']
})
export class ActivityEditComponent implements OnInit {

  form = this.fb.group({
    name: ['', [Validators.required]],
    description: ['', [Validators.required]],
    category: ['', [Validators.required, Validators.minLength(1)]],
    place: ['', [Validators.required]],
    datetime: ['', [Validators.required]]
  });

  categories: Category[];
  activity: Activity;
  id: string;

  placeId: string = '';
  city: string = '';

  @ViewChild('place')
  public searchElementRef: ElementRef;

  constructor(private fb: FormBuilder,
              private route: ActivatedRoute,
              private router: Router,
              private activityService: ActivityService,
              private user: UserService,
              private mapsAPILoader: MapsAPILoader,
              private ngZone: NgZone) {
  }

  ngOnInit() {
    this.activityService.getAllCategories().subscribe(
      categories => {
        this.categories = categories;
        console.info('got categories');
      });

    this.id = this.route.snapshot.paramMap.get('id');

    this.activityService.getActivity(this.id).subscribe((activity) => {
      this.activity = activity;
      this.activity.date = new Date(activity.date);
      this.form.get('name').setValue(this.activity.name);
      this.form.get('description').setValue(this.activity.description);
      this.form.get('category').setValue(this.activity.category);
      this.form.get('datetime').setValue(//this.activity.date.toISOString().substr(0, 16)
        this.activity.date.toISOString().substr(0, 10)
        + 'T' + this.activity.date.toTimeString().substr(0, 5));
      this.placeId = this.activity.placeId;
      // this.placeId = 'EiRwbGFjIExpdGV3c2tpLCAyMC0wMDEgTHVibGluLCBQb2xhbmQiLiosChQKEgnVHuZHaFciRxE2UZhVYs_YtxIUChIJYUAVHhRXIkcRX-no9nruKFU';
      this.city = this.activity.city;

      this.mapsAPILoader.load().then(() => {
        let geocoder = new google.maps.Geocoder();
        geocoder.geocode({'placeId': this.placeId},
          ((results, status) => {
            if (status === google.maps.GeocoderStatus.OK) {
              if (results[0]) {
                let address = results[0].formatted_address;
                console.info('adderss: ' + address);
                this.form.get('place').setValue(address);
              }
            }
          }));

        let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
          componentRestrictions: {country: 'pl'}
        });
        autocomplete.addListener('place_changed', () => {
          this.ngZone.run(() => {
            let place: google.maps.places.PlaceResult = autocomplete.getPlace();
            this.placeId = place.place_id;
            console.info('length: ' + this.placeId.length);
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
    });
  }

  update() {
    const name = this.form.get('name').value;
    const description = this.form.get('description').value;
    const category = this.form.get('category').value;
    const datetime = new Date(new Date(this.form.get('datetime').value).valueOf());
    console.info(this.form.get('datetime').value);
    console.info(datetime.toISOString());
    this.activityService.updateActivity(this.id, name, description, category, datetime, this.city, this.placeId).subscribe(() => {
      let link: string = '/activity/' + this.id;
      this.router.navigate([link]);
    });
  }

  cancel() {
    let link = '/activity/' + this.id;
    this.router.navigate([link]);
  }

}
