import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  email: string = 'ingrese su correo'; 
  password: string = 'ingrese su contra';
  errorMessage: string | undefined;

  constructor(private navCtrl: NavController) {}

  login() {
    if (this.email === 'test@example.com' && this.password === 'admin') {
      this.navCtrl.navigateForward('/home');  
    } else {
      this.errorMessage = 'Credenciales incorrectas';  
    }
  }
}


