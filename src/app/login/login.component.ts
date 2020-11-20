import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { mainService } from '../main.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {





  userData:any []=[];
  public loginForm : FormGroup;
  public registerForm : FormGroup;
  isLogin:boolean = true;

  constructor(public apiService:mainService , private formBuilder : FormBuilder) { }

  ngOnInit(): void {

    this.getAllUsers();

    this.loginForm = this.formBuilder.group({
      'email':[null, Validators.compose([Validators.required])],
      'password':[null, Validators.compose([Validators.required])],
    });


    let password = this.registerForm.get('password').value;
    let confPassword = this.registerForm.get('confPassword').value;
    
    if (password === confPassword){
      let tempBody ={
        "role" : "user",
        "email": this.registerForm.get('email').value,
        "password": this.registerForm.get('password').value,
        "first_name": this.registerForm.get('first_name').value,
        "last_name": this.registerForm.get('last_name').value,

      };
      this.apiService.postApi('/user/new',tempBody).subscribe((response: any)=>{
        console.log(response);
  
      },
      (errorValue: any)=>{
        console.log(errorValue.error.msg);
    });

  }else{
console.log("password does not matched")

  }
  }

  getAllUsers(){
    console.log('########343');
    this.apiService.getApi('/user/getAll').subscribe((response: any)=>{
      this.userData = response.data;
      console.log(this.userData.length);

    },
    (errorValue: any)=>{
      console.log(errorValue);
    }
    );
  }
  loginUser(){
    let tempBody = {
      "email":this.loginForm.get('email').value,
      "password":this.loginForm.get('password').value
    };
    this.apiService.postApi('/user/login',tempBody).subscribe((response:any)=>{

    },
    (errorValue: any)=>{
      console.log(errorValue);
    
  });
}




}