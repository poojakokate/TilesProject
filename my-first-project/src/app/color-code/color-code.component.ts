import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-color-code',
  templateUrl: './color-code.component.html',
  styleUrls: ['./color-code.component.css']
})
export class ColorCodeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  maincolors: MainColor[] = [
    {value: '1', viewValue: 'Primary'},
    {value: '2', viewValue: 'Oxide'},
    {value: '3', viewValue: 'Poly'}
  ];

}
export interface MainColor {
  value:string;
  viewValue: string;
}
