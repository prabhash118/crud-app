import { Route } from '@angular/compiler/src/core';
import { Component, OnInit, } from '@angular/core';
import { Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { ProductsComponent } from '../products/products.component';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  // input,output and keyUpEvent
  // @Input() labelName:string ="Search";
  // @Output() outputValue = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  // keyUpEvent(value:any){
  //   this.outputValue.emit(value);
  // }
}

export const landingChildRoutes : Routes =[
{
  path:'home',
  component: HomeComponent
},
{
  path:'products',
  component: ProductsComponent
}

];
