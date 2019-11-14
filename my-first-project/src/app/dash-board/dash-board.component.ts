import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.css']
})
export class DashBoardComponent implements OnInit {

  number:number;
  name:any="user123";

  opened=false;
  log(state)
  {
          console.log(state);
  }

  Num:any="user234";
  show: boolean=false;
  

  set(event:number)
  {
    this.number=event;
    switch(this.number){
        case 0:
                this.router.navigate(['/dash-board/crum']);
                break;
        case 1:
                this.router.navigate(['/dash-board/solution']);
                break;
        case 2:this.router.navigate(['/dash-board/color/colorcode']);
                break;
        case 3:this.router.navigate(['/dash-board/color/colorname']);
                break;        
        case 4:
                this.router.navigate(['/dash-board/module']);
                break;
        case 5:this.router.navigate(['/dash-board/production']);
                break;
        case 6:this.router.navigate(['/dash-board/payroll']);
                break;
        default:alert("error");
    }
  }

  constructor(private router:Router) { }

  count=0;
  OpenClick()
  {
          if(this.count==0)
          {
                  this.show=true;
                  this.count++;
          }
          else
          {
                  this.count--;
                  this.show=false;
          }
  }
  logout()
  {
          this.router.navigate(['/login']);
  }

  ngOnInit() {
  }

}
