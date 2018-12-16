import { Component, OnInit } from '@angular/core';
import {User} from '../User';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  login: string;

  user: User = {
    id: 1,
    login: "jan_k",
    email: "jan_k@gmail.com",
    password: "passwd",
    firstName: "Jan",
    lastName: "Kowalski",
    city: "Lublin",
    bday: new Date('1995-01-01T00:00:00Z')
  };

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {  //todo czy login?
    this.login = this.route.snapshot.paramMap.get('login');
     if (this.login == null){
       this.login = localStorage.getItem('login');
     }
    //TODO http
  }

  delete(){
    if(confirm("Czy na pewno chcesz usunąć konto?")){
      //todo http
      //todo user-deleted
    }
  }

}
