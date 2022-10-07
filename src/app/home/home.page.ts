import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public router:Router, public toastController: ToastController) {}
  field: String = "";


  user = {
    usuario: "",
    password: ""
  }
  
  


  restablecer(){
    this.router.navigate(['/restabler']);
  }
  inicio(){
    if (this.validateModel(this.user)) {
      this.presentToast("Bienvenido " + this.user.usuario);
      let navigationExtras: NavigationExtras = {
        state: {
          user: this.user 
        }
      };
      this.router.navigate(['/inicio'], navigationExtras);
    }else{
      this.presentToast("Falta ingresar: "+this.field, 4500);
    }
  }
  validateModel(model: any) {
    for (var [key, value] of Object.entries(model)) {
      if (value == "") {
        this.field = key;
        return false;
      }
    }
    return true;
  }

  async presentToast(msg: string, duracion?: number) {
    const toast = await this.toastController.create({
      message: msg,
      duration: duracion ? duracion : 2000
    });
    toast.present();
  }


}
