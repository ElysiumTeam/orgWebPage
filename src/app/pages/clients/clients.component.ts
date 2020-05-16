import { Component, OnInit } from '@angular/core';
import { InfoService } from '../../services/info.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styles: []
})
export class ClientsComponent implements OnInit {

  constructor(public _is:InfoService) { }

  ngOnInit(): void {
  }

}
