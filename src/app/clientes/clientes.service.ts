import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import {Cliente} from './cliente.model'

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  private clients: Cliente[] = [
    {
      id: '1',
      nombres: 'Anderson Eduardo',
      apellidos: 'Jiemenz Prieto',
      cedula: '1104187750',
      telefono: '0939700013',
      direccion: 'Loja',
      email: 'ander@gmail.com',
    }
  ];

  constructor() { }

  getClientes(){
    return [...this.clients]
  }

  getCliente(clienteId: string) {
    return{
      ...this.clients.find(client => {
        return client.id === clienteId
      })
    }
  }

  addCliente(nombres: string, apellidos: string, cedula: string, telefono: string, direccion: string, email: string) {
    this.clients.push({
      nombres,
      apellidos,
      cedula,
      telefono,
      direccion,
      email,
      id: this.clients.length + 1+ ''

    });
  }

  deletCliente(clienteId: string){
    this.clients = this.clients.filter(client =>{
      return client.id !== clienteId
    });
    console.log(this.clients);
  }

}
