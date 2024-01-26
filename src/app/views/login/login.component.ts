import { Component } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button'
import { JWT_OPTIONS } from '@auth0/angular-jwt'
import { PasswordModule } from 'primeng/password'
import { ReactiveFormsModule, FormBuilder, FormControl, FormsModule, FormGroup } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';
import { AlertsService } from '../../services/alerts.service';
 
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule,InputTextModule, PasswordModule,ButtonModule],
  providers: [{
    provide: JWT_OPTIONS,
    useValue: JWT_OPTIONS
  }],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  // user?:string;
  user:string;
  password?:string;

  userToken:string
constructor(private login:LoginService,private router:Router, private alerts:AlertsService) { }

async logUser() {

  try {
    if(this.user === null || this.user === '' || this.user === undefined){
      this.alerts.toastWarning('el campo usuario es obligatorio')
      console.log('el campo username es obligatorio');
      return
    }else if(this.password === null || this.password === '' || this.password === undefined){
      this.alerts.toastWarning('el campo contraseña es obligatorio')
      console.log('el campo password es obligatorio');
      return
    }
  

  let user = {
    username:this.user,
    password:this.password,
  }

  const response = await this.login.post(user);

  let user_data = {
    access_token: response.access,
    refresh_token: response.refresh,
    // user_id: response.profile.id,
    userData:{
      id:response.profile.id,
      email:response.profile.email,
      name:response.profile.user.first_name,
      lastName:response.profile.user.last_name,
      username:response.profile.user.username,
      score:response.profile.score,
      campanas:response.profile.campanas,
      queues:response.profile.queues,
      roles:{
        is_admin:response.profile.is_admin,
        is_supervisor:response.profile.is_supervisor,
        is_agent:response.profile.is_agent,
      }
  }

  
}
localStorage.setItem('user',JSON.stringify(user_data))



if(user_data.access_token !== undefined || user_data.refresh_token !== undefined  ){
  this.router.navigate(['/home'])
} else {
  this.router.navigate(['/login'])
}




console.log(user_data.userData);

this.alerts.toastSuccess('Inicio de sesión exitoso');


} catch (error){
  console.log(error)
  this.alerts.toastError('Hubo un error al iniciar sesion')

}
}


}
