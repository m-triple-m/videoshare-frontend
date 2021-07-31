import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
loginform : any;
  constructor(private fb:FormBuilder , private userservice:UserService, private router: Router) { }

  ngOnInit(): void {
    this.initForm();
  }
initForm()
{this.loginform = this.fb.group({
email : '',
password: '',
});
}
submitForm(){
  console.log(this.loginform.value);

  let formdata = this.loginform.value;
  this.userservice.getUserByEmail(formdata.email)
  .subscribe(  (data : any) => {
    console.log(data);

    if(data ){

    if(data.password ==formdata.password){
      console.log('login successfull');
    sessionStorage.setItem( 'user', JSON.stringify(data));
    Swal.fire({
      icon : 'success',
      title: 'Hurray',
      text: 'Logged in Successfully'
    })
    this.router.navigate(['/managevideo']);
    
  }else{
      console.log('password incorrect');
      Swal.fire({
        icon : 'error',
        title: 'Oops!!',
        text: 'Login failed'
      })
    }

    }else{
      console.log('email not found');
      Swal.fire({
        icon : 'error',
        title: 'Hurray',
        text: 'Login failed'
      })
    }
  })
}
}

