import { Component, OnInit } from '@angular/core';
import { ServicioContactoService } from '../servicios/servicio-contacto.service';
import { Contacto } from '../interfaces/contacto';

@Component({
  selector: 'app-lista-contactos',
  templateUrl: './lista-contactos.component.html',
  styleUrls: ['./lista-contactos.component.css']
})
export class ListaContactosComponent implements OnInit {

  
  listaContactos: any[] = [];

  constructor(private ContactoService: ServicioContactoService) { }

  ngOnInit(): void {
    this.ContactoService.getContacto().subscribe(resp => { 
        resp.data.forEach ((contacto: Contacto) => {
          this.listaContactos.push(contacto);
      });
    });
  }

}
