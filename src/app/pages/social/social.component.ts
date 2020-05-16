import { Component, OnInit } from '@angular/core';
import { InfoService } from '../../services/info.service';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styles: []
})
export class SocialComponent implements OnInit {

  constructor( public _is: InfoService) { }

  ngOnInit(): void {
  }

}
