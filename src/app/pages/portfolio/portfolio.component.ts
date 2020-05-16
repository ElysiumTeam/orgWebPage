import { Component, OnInit } from '@angular/core';
import { InfoService } from '../../services/info.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styles: []
})
export class PortfolioComponent implements OnInit {

  constructor(public _is: InfoService) {
    console.error();
   }

  ngOnInit(): void {
  }

}
