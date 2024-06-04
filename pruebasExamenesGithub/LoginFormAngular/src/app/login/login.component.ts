import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  implements OnInit{
  ngOnInit(): void {

  }

  form = new FormGroup(
    {
    usuario: new FormControl('', Validators.required),
    contrasenia: new FormControl('', Validators.required)
  });
  login(){
    console.log(this.form.value);
  }
}
