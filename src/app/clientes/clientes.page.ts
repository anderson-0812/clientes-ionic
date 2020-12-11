import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import{ ClientesService} from"./clientes.service";
import { Cliente } from './cliente.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.page.html',
  styleUrls: ['./clientes.page.scss'],
})
export class ClientesPage implements OnInit {
  clientes: Cliente[];

  constructor(private clientesServicio: ClientesService, private router: Router) { }

  ngOnInit() {
    this.clientes = this.clientesServicio.getClientes();
    console.log(this.clientesServicio.getClientes());
  }

  // Recarga la vista con los datos actualizados sirve para que lso datos q se eliminaron o cambiaron se reflejen
  ionViewWillEnter(){
    this.clientes = this.clientesServicio.getClientes();
  }

  agregarCliente(){
    console.log('Crear Cliente');
    this.router.navigate(['/cliente-add']);
  }

}
