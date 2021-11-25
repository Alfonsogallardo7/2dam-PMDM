import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthRegisterDto } from '../models/dto/auth.dto';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerDto = new AuthRegisterDto();
  registerForm = new FormGroup ({
    username: new FormControl(''),
    email: new FormControl (''),
    password: new FormControl (''),
    code: new FormControl ('')

  });
  constructor(private authService: AuthService) { }

  ngOnInit(): void {



  }

  doRegister() {
    this.authService.register(this.registerDto).subscribe(registerResponse => {
      console.log(registerResponse.token)
    });
  
  }

}
