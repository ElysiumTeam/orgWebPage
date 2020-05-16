import { Component, OnInit } from '@angular/core';
import { InfoService } from '../../services/info.service';
import { Banner } from '../../interfaces/info-pagina.interface';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styles: []
})
export class BannerComponent implements OnInit {

  constructor(public _is: InfoService) {
  }

  ngOnInit(): void {
  }

}
