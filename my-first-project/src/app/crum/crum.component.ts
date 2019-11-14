import { Component, OnInit } from '@angular/core';
export interface PeriodicElement { 
  ID,Quantity,Amount ,Total: number;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {ID: 1,Quantity: 2,Amount:230,Total:460},
  {ID: 2,Quantity: 3,Amount:230,Total:690},
  {ID: 3,Quantity: 4,Amount:230,Total:920}
];
@Component({
  selector: 'app-crum',
  templateUrl: './crum.component.html',
  styleUrls: ['./crum.component.css']
})
export class CrumComponent implements OnInit {

  displayedColumns: string[] = ['ID','Quantity','Amount','Total'];
  dataSource = ELEMENT_DATA;


  constructor() { }

  ngOnInit() {


  }

}
