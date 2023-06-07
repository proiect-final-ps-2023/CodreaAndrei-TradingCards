import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../service/user.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  name = new FormControl('');
  registerForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, 
              private router: Router,
              private userService: UserService) { this.registerForm = this.formBuilder.group({}); }

  ngOnInit() {
    this.registerForm = this.formBuilder.group(
      {
        userName: ['', Validators.required],
        name: ['', Validators.required],
        password: ['', [Validators.required, Validators.email]],
        confirmPassword: ['', Validators.required]
      
      },
  
    );
  }

  get f() {
    return this.registerForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    
    let json = JSON.stringify(this.registerForm.value, null, 4);
    JSON.parse

    let values = this.registerForm.value

    if (values['userName'] === "" && values['name'] === "" && values['password'] === "" &&
        values['confirmPassword'] === "") {
          return;
        } else if (values['password'] === values['confirmPassword']) {
          this.userService.register(values['userName'], values['name'], values['password']).subscribe();
          this.router.navigate(['login']);
        }

    /*if (this.registerForm.invalid) {
      alert(
        'FAIL!! :-)\n\n');
      return;
    }

    alert(
      'SUCCESS!! :-)\n\n'
    );*/
    
  }

  onReset() {
    this.submitted = false;
    this.registerForm.reset();
  }
}
