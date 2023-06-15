import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

export class User {
  constructor(
    public firstname: string,
    public lastname: string,
    public email: string,
    public password: string
  ) {}
}

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent {
  register = new FormGroup(
    {
      firstname: new FormControl(
        '',
        Validators.compose([
          Validators.required,
          Validators.maxLength(15),
          Validators.minLength(3),
        ])
      ),
      lastname: new FormControl(
        '',
        Validators.compose([
          Validators.required,
          Validators.maxLength(15),
          Validators.minLength(3),
        ])
      ),
      email: new FormControl(
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern('[a-z0-9]+@[a-z]+.[a-z]{2,3}'),
        ])
      ),
      password: new FormControl(''),
    },
    { updateOn: 'submit' }
  );

  user?: User;
  submited: boolean = false;
  constructor() {}

  errorMessage(input?: string) {}

  onSubmit() {
    this.user = new User(
      this.register.value.firstname ?? '',
      this.register.value.lastname ?? '',
      this.register.value.email ?? '',
      this.register.value.password ?? ''
    );
    this.submited = true;
    console.log(this.user);
    console.log(this.register);
  }
}
