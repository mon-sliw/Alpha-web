import {Component, OnInit} from '@angular/core';
import {faEdit, faPlus, faTrash} from '@fortawesome/free-solid-svg-icons';
import {Category} from '../Category';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  faPlus = faPlus;
  faEdit = faEdit;
  faTrash = faTrash;
  categories: Category[];
  addingName = new FormControl('', [Validators.required]);
  editingName = new FormControl('', [Validators.required]);
  adding = false;
  editingId = -1;

  constructor() {
  }

  ngOnInit() {
    //todo http, zastąp kategorie
    this.categories = [
      {id: 1, name: 'Tenis'},
      {id: 2, name: 'Kino'},
      {id: 3, name: 'Koncert'},
      {id: 4, name: 'Piłka nożna'},
      {id: 5, name: 'Wycieczka rowerowa'}
    ];
  }

  add() {
    this.adding = true;
  }

  addDone() {
    const name = this.addingName.value;
    this.categories.concat([{id: this.categories.length + 1, name: name}]);
    this.adding = false;
    //todo http
  }

  cancel() {
    this.adding = false;
    this.editingId = -1;
  }


  edit(category: Category) {
    this.editingId = category.id;
    this.editingName.setValue(category.name);
  }

  editDone(){
    this.editingId = -1;
    const name = this.editingName.value;
    //todo http
  }

  delete(id: number) {
    if (confirm("Czy na pewno chcesz usunąć kategorię?")){
      //todo http
    }
  }

}
