import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AlertsService {

  constructor() { }

  successAlert(message:string){
    Swal.fire({
      title:'Success',
      text: message,
      icon:'success',
      animation:true,
      // iconColor:'purple'
    })
  }

  errorAlert(message:string){
    Swal.fire({
      title:'Error',
      text: message,
      icon:'error',
      animation:true,
    })
  }

  confirmationAlert(message:string){
    Swal.fire({
      title:'',
      text: message,
      icon:'question',
      animation:true,
    })
  }

  cautionAlert(message:string, functToExecute){
    Swal.fire({
      title:'Cuidado!',
      text: message,
      icon:'warning',
      animation:true,
      showCancelButton:true
    })
    .then(result => {
      result.isConfirmed ? functToExecute() : ''
    })
  }

  // TOAST ALERTS  // 

  toastSuccess(title:string) {
    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 1500,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
      }
    });
    Toast.fire({
      icon: 'success',
      title: title
    })
  }

  toastError(title:string) {
    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 1500,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
      }
    });

    Toast.fire({
      icon:'error',
      title:title,
    })
  }

  toastWarning(title:string) {
    const Toast = Swal.mixin({
      toast:true,
      position:'top-right',
      showConfirmButton:false,
      timer:1500,
      timerProgressBar:true,
      didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer
      }
    });
    Toast.fire({
      icon:'warning',
      title:title,
    })
  }

}
