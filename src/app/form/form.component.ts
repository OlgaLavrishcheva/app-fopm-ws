import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {User} from '../user.class';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit, AfterViewInit {

  roles: string[] = ['Гость', 'Модератор', 'Администратор'];
  model: User = new User(0, null, null, null);

  formErrors = {
    name: '',
    age: ''
  };

  @ViewChild('userForm') userForm: NgForm;

  validationMessages = {
    name: {
      required: 'Имя обязательно',
      minlength: 'Имя должно быть не менее 4 символов'
    },
    age: {
      required: 'Возраст обязателен'
    }
  };

  constructor() {
  }

  ngOnInit(): void {
  }


  ngAfterViewInit(): void {
    this.userForm.valueChanges.subscribe(data => this.onValueChanged());
  }

  onValueChanged(data?: any): void {
    if (!this.userForm) {
      return;
    }

    const form = this.userForm.form;

    for (const field in this.formErrors) {
      this.formErrors[field] = '';

      const control = form.get(field);

      if (control && control.dirty && control.invalid) {
        const message = this.validationMessages[field];

        for (const key in control.errors) {
          console.log(message[key]);
          this.formErrors[field] += message[key] + ' '
        }
      }
    }
  }

  onSubmit(): void {
    console.log('Form submitted');
  }
}
