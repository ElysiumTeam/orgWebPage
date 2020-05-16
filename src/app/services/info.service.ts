import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RootObject, About, Banner, Client, Portfolio, Contact, Services, Social } from '../interfaces/info-pagina.interface';


@Injectable({
  providedIn: 'root'
})
export class InfoService {

  banner: Banner;
  about: About;
  services: Services;
  clients: Client[];
  portfolio: Portfolio;
  contact: Contact;
  social: Social[];
  cargada = false;

  constructor(public http: HttpClient) {
    this.carga_info();
   }

  public carga_info() {
    this.http.get('assets/data/info.json').subscribe((data: RootObject) => {
      this.cargada = true;
      this.banner = data.banner;
      this.about = data.about;
      this.services = data.services;
      this.clients = data.clients;
      this.contact = data.contact;
      this.portfolio = data.portfolio;
      this.social = data.social;
    });
  }
}
