import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
 
  registerForm: any;  
  constructor(private fb:FormBuilder , private userservice:UserService) {
    console.log('component loaded');
   }

  ngOnInit(): void {
    
    this.initForm();
  }
  initForm(){
    this.registerForm=this.fb.group({
     fullname : '',
     email : '',
     password : '',
    });
   }
   
   registerSubmit(){
    console.log(this.registerForm.value);
    this.userservice.addUser( this.registerForm.value).subscribe((res) => { console.log(res) });
  
  }
 
  
 
  }

