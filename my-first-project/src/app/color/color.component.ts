import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  Id: any;
  quantity: any;
  amount: any;
  total: any;
  date:any;
}
const ELEMENT_DATA: PeriodicElement[] = [
 ];

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {

  


  constructor() { }

  ngOnInit() {
  }

}
