import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'palindromes';
  text: string = '';
  img: string = '../assets/type.jpeg';
  result: string = '';

  reverse(text: string) {
    const goBack = text.split('').reverse().join('');
    if (text.trim() === '') {
      this.img = '../assets/type.jpeg';
      this.result = ``;
      return;
    }

    switch (text) {
      case goBack:
        this.result = `A palavra ${text} é um palíndromo`;
        this.img = '../assets/happy.jpg';
        break;
      default:
        this.result = `A palavra ${text} não é um palíndromo`;
        this.img = '../assets/bad.jpg';
    }
  }
}
