import { Component } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext'
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertsService } from '../../services/alerts.service';
import { UserDataService } from '../../services/user-data.service';


@Component({
   selector: 'app-profile',
   standalone: true,
  imports: [CommonModule, ReactiveFormsModule, InputTextModule, FormsModule, ButtonModule,RippleModule],
   templateUrl: './profile.component.html',
   styleUrl: './profile.component.scss'
})
export class ProfileComponent {

   user: any

   form: FormGroup

   userNewData: any;
   username: string;
   email: string;
   name: string;
   lastName: string;
   tokens:any;
   userInfo: any;

   // Modal triggers
   showUserData: boolean;
   showMoreInfo: boolean;
   showLogOut: boolean;


   constructor(private fb: FormBuilder, private router: Router, 
    private alerts:AlertsService, private userInformation:UserDataService){

      this.form = this.fb.group({
         name: new FormControl('', Validators.required),
         lastName: new FormControl('', Validators.required),
         email: new FormControl({value: '', disabled: true}),
         username: new FormControl({value: '', disabled:true})
      })

   }


   ngOnInit() {

      this.userInfo = this.userInformation.getUserData();

      this.form.patchValue({
         name: this.userInfo.name,
         lastName: this.userInfo.lastName,
         email: this.userInfo.email,
         username: this.userInfo.username
      })
   }

   async onSubmit() {

      let updatedName = this.form.get('name')?.value;
      let updatedLastName = this.form.get('lastName')?.value;
      let updatedEmail = this.form.get('email')?.value;
      let updatedUsername = this.form.get('username')?.value

      const updatedUserData = {
         name: updatedName,
         lastName: updatedLastName,
         email: updatedEmail,
         username: updatedUsername
      }
      console.log('Nuevos datos de usuario: ', updatedUserData)

      // const response = await this.profileService.patch(updatedUserData);
      
   }

   showUserInfo() {
      this.showUserData = !this.showUserData;
      this.showMoreInfo = false

   }

   changePassword() {
      this.router.navigate(['/forgot-password']);

      console.log('deberia redirigir a la pagina de password')
   }

   moreInfo() {
      this.showMoreInfo = !this.showMoreInfo;
      this.showUserData = false;
   }

   logOut() {
      this.showLogOut = !this.showLogOut
      // Limpia el localstorage 
      this.alerts.confirmationAlert('Estas seguro que deseas cerrar sesion');
      // setTimeout(() => {
         localStorage.clear();
         this.router.navigate(['login']);
      // }, 2000);

   }

   // Cerrar ventana de perfil.
   closeModal() {
      this.router.navigate(['/home']);
   }

}
