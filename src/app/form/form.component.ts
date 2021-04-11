import { Component, OnInit } from '@angular/core';
import {User} from '../user.class';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  roles: string[] = ['Гость', 'Модератор', 'Администратор'];
  model: User = new User(0, null, null, null);

  constructor() { }

  ngOnInit(): void {
  }

  get diagnostic(): string {
    return JSON.stringify(this.model);
}
}
