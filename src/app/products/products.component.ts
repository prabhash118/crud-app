import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

name = "product details"
category:string = '';

// filterValue : string = '' ;

  product:any[] = [
    {
    "code": 132,
    "category" : "baby",
    "name": "sadasdas",
    "details" : "aTTfTdfcdT",
    "price":250
    
    },
    {
    "code": 102,
    "category" :"women" ,
    "name": "ghfghfg",
    "details" : "aaLdsddgbdD",
    "price":500
    
    },
    {
    "code": 122,
    "category" : "men",
    "name": "cvcvs",
    "details" : "aadcdfsgbaa",
    "price":750
    
    },
    {
    "code": 145,
    "category" : "men",
    "name": "sdssfg",
    "details" : "sdeggfbfvfa",
    "price":100
    
    },
    {
    "code": 107,
    "category" : "women",
    "name": "qwweq",
    "details" : "bgbfvhnbbfbaa",
    "price":1250
    
    },
    {
    "code": 178,
    "category" : "baby",
    "name": "ooodfd",
    "details" : "lgbgbhnhnaa",
    "price":2000
    
    }
    ]
  constructor() { }

  ngOnInit(): void {
  }

  // setStudentData() : any[] {
  //   let tempArr:any[] =[];
  //   for (let index = 0; index < this.product.length; index++) {
  //     const element = this.product[index];
  //     if(element.category>this.filterValue){
  //       tempArr.push(element);
  //     }

  //   }
  //   return tempArr;
  // }
  // getValue(value){
  //   console.log("in table");
  //   console.log(value);
  //   console.log("in table");
  //   this.filterValue = value;
  // }
}
