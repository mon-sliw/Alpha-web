import {Component, OnInit} from '@angular/core';
import {faEdit, faPlus, faTrash} from '@fortawesome/free-solid-svg-icons';
import {Category} from '../Category';
import {FormControl, Validators} from '@angular/forms';
import {ActivityService} from '../../activity/activity.service';
import {collectExternalReferences} from '@angular/compiler';

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

  constructor(private activityService: ActivityService) {
  }

  ngOnInit() {
    /*this.categories = [
      {id: 1, name: 'Tenis'},
      {id: 2, name: 'Kino'},
      {id: 3, name: 'Koncert'},
      {id: 4, name: 'Piłka nożna'},
      {id: 5, name: 'Wycieczka rowerowa'}
    ];*/
    this.updateCategories();
  }

  add() {
    this.adding = true;
  }

  addDone() {
    const name = this.addingName.value;
    this.activityService.addCategory(name).subscribe(
      () => {
        this.adding = false;
        this.addingName.setValue('');
        console.info('category added');
        this.updateCategories();
      });

  }

  cancel() {
    this.adding = false;
    this.editingId = -1;
  }


  edit(category: Category) {
    this.editingId = category.id;
    this.editingName.setValue(category.name);
  }

  editDone() {
    const name = this.editingName.value;
    this.activityService.updateCategory('' + this.editingId, name).subscribe(
      () => {
        this.editingId = -1;
        this.updateCategories();
      });
  }

  delete(id: number) {
    if (confirm('Czy na pewno chcesz usunąć kategorię?')) {
      this.activityService.deleteCategory('' + id).subscribe(
        () => {
          console.info('deleted');
          this.updateCategories();
        });
    }
  }

  updateCategories() {
    this.activityService.getAllCategories().subscribe(
      categories => {
        this.categories = categories;
        console.info('get categories');
      });
  }

}
