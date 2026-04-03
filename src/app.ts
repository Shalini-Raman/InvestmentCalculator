import { Component } from '@angular/core';
import {Header} from './app/header/header';
import {UserInput} from './app/user-input/user-input';
@Component({
  selector: 'app-root',
  imports: [Header,UserInput],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {

}
