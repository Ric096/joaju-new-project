import { Injectable, OnInit } from '@angular/core';
import { environments } from '../../env/env.local';
import { UserDataService } from '../services/user-data.service';

const WEB_SOCKET_URL = environments.web_socket;

@Injectable({
  providedIn: 'root'
})
export class WebsocketService implements OnInit {

  // socket:any;


  private socket: WebSocket

  constructor(private user: UserDataService) { }

  ngOnInit(): void {
    // this.createWebSocket();
    // this.closeSocket()
  }

  createWebSocket() {

    // Recuperamos el token de acceso de usuario
    const [access] = this.user.getTokens()

    this.socket = new WebSocket(`${WEB_SOCKET_URL}${access}`);


    // Creamos un observador para poder realizar los cambios dinámicamente
  
      this.socket.onopen = (event) => {
        console.log('Se ha iniciado la conexión con el websocket ', event)
      }

      //  PARA QUE EL CLIENTE RECIBA MENSAJES
      this.socket.onmessage = (event) => {
        const data = JSON.parse(event.data)
        console.log(data)
      }

      // MANJEAR ERRORES
      this.socket.onerror = (event) => {
      }

      // CORROBORAR SI LA CONEXIÓN SE ESTÁ CERRANDO 
      this.socket.onclose = (event) => {
        console.log('La conexion se esta cerrando', event)
        try{
          this.reconect()
        } catch(error) {
          console.log('Se ha cerrado la conexion con el websocket', error)
        }
      }


  }

  // PARA ENVIAR MENSAJES AL SERVIDOR
  sendMessage(messages: string[]) {
    this.socket.send(JSON.stringify(messages));
  }

  closeSocket() {
    this.socket.close();
  }

  reconect() {

    // setInterval(() => {
      this.createWebSocket()
    // },6000)

  }





}
