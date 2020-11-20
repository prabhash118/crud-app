import { Component, OnInit } from '@angular/core';
import { mainService } from '../main.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

userData:any[] = [];


  constructor(public apiService :mainService) { }

  ngOnInit(): void {
    this.getAllUsers();
  }
  getAllUsers(){
    this.apiService.getApi('/user/getAll').subscribe((response: any)=>{
      this.userData = response.data;

    },
    (errorData: any)=>{
      console.log(errorData);
    }
    );
  }

}
