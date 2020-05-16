export interface Banner {
  bienvenida: string;
  subtext: string;
  imagen: string;
}

export interface About {
  imagen: string;
  titulo: string;
  parrafo1: string;
  parrafo2: string;
}

export interface Servicio {
  imagen: string;
  titulo: string;
  descripcion: string;
}

export interface Services {
  titulo: string;
  descripcion: string;
  servicios: Servicio[];
}

export interface Client {
  imagen: string;
  titulo: string;
}

export interface Portafolio {
  imagen: string;
  nombre: string;
  descripcion: string;
  link: string;
}

export interface Portfolio {
  descripcion: string;
  portafolio: Portafolio[];
}

export interface Contact {
  descripcion: string;
  token?: string;
  email_desde?: string;
  asunto?: string;
}

export interface Social {
  icono: string;
  nombre: string;
  link: string;
}

export interface RootObject {
  banner: Banner;
  about: About;
  services: Services;
  clients: Client[];
  portfolio: Portfolio;
  contact: Contact;
  social: Social[];
}
