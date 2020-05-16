import { Component, OnInit } from '@angular/core';
import './../../../assets/js/smtp.js';
import { InfoService } from '../../services/info.service';
declare let Email: any;

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styles: []
})
export class ContactComponent implements OnInit {
  nombre = '';
  email =  '';
  msj = '';


  constructor(public _is: InfoService) { }

  ngOnInit(): void {

  }

  onSubmit() {

  }
  processForm() {
    Email.send({
      SecureToken : '79f31359-e581-4c7a-8055-84652bf4b488',
      From : 'nico_nahuelpan@hotmail.com',
      to : this.email,
      Subject : `Contacto via webpage, Cliente: ${this.nombre}`,
      Body : this.msj
    }).then(
      message => alert(message)
    );
  }

}
