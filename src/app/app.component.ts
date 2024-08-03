import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MEALS_DUMMY_DATA } from './meals-dummy-data';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CurrencyPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  isOpenModal = false;
  dummyData = MEALS_DUMMY_DATA;

  open() {
    this.isOpenModal = true;
    this.addBodyClass();
  }
  cancel() {
    this.isOpenModal = false;
    this.addBodyClass();
  }

  addBodyClass() {
    if (this.isOpenModal) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }
  }
}
