import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Meal, MEALS_DUMMY_DATA } from './meals-dummy-data';
import { CurrencyPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CurrencyPipe, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  isOpenModal = false;
  dummyData = MEALS_DUMMY_DATA;
  formData = {
    name: '',
    description: '',
    price: '',
    imageUrl: '',
  };
  @ViewChild('name', { static: false }) nameInput!: ElementRef;

  constructor(private cdRef: ChangeDetectorRef) {}

  openModal() {
    this.isOpenModal = true;
    this.cdRef.detectChanges(); // Detect changes to update the view
    if (this.nameInput && this.nameInput.nativeElement) {
      this.nameInput.nativeElement.focus();
    }
  }

  closeModal() {
    this.isOpenModal = false;
  }

  toggleBookmark(meal: Meal) {
    meal.bookmark = !meal.bookmark;
  }

  onSubmit(event: SubmitEvent) {
    event.preventDefault();
    const newMeal: Meal = {
      id: this.dummyData.length + 1,
      name: this.formData.name,
      description: this.formData.description,
      price: +this.formData.price,
      bookmark: false,
      imageUrl: this.formData.imageUrl,
    };
    this.dummyData.unshift(newMeal);
    this.isOpenModal = false;
    this.resetFormData();
    this.closeModal();
  }

  private resetFormData() {
    this.formData = {
      name: '',
      description: '',
      price: '',
      imageUrl: '',
    };
  }
}
