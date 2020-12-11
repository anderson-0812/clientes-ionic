import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Cliente } from '../cliente.model';
import { ClientesService, } from '../clientes.service';

@Component({
  selector: 'app-cliente-detalle',
  templateUrl: './cliente-detalle.page.html',
  styleUrls: ['./cliente-detalle.page.scss'],
})
export class ClienteDetallePage implements OnInit {

  cliente: Cliente;

  constructor(private activatedRoute: ActivatedRoute, private clientesService: ClientesService, private router: Router, private alerta: AlertController) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      const recipeId = paramMap.get('clienteId');
      this.cliente = this.clientesService.getCliente(recipeId);
      console.log(this.cliente);
    });
  }

  async eliminarCliente(){
    console.log('Eliminar Cliente');
    const alertaElemento = await this.alerta.create({
      header: 'Estas seguro de eliminar este Cliente?? ',
      message: 'recuerda que no se podra recuperar despues ',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel'
        },
        {
          text: 'Aceptar',
          handler: () => {
            this.clientesService.deletCliente(this.cliente.id);
            this.router.navigate(['/clientes']);
          }
        },
      ]
    });

    await alertaElemento.present();
  }

}
