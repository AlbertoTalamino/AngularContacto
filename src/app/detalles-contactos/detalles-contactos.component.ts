import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Contacto } from '../interfaces/contacto';
import { ServicioContactoService } from '../servicios/servicio-contacto.service';

@Component({
  selector: 'app-detalles-contactos',
  templateUrl: './detalles-contactos.component.html',
  styleUrls: ['./detalles-contactos.component.css']
})
export class DetallesContactosComponent implements OnInit {

  contact?: Contacto;

  constructor(
    private route: ActivatedRoute,
    private provSvc: ServicioContactoService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      let id = Number(params.get('id'));
      this.provSvc.getDetail(id).subscribe(
        (resp: any) => {
          this.contact = resp.data;
        }
        )
    }
    )
  }

}
