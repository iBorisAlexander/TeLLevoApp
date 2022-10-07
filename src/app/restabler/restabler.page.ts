import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-restabler',
  templateUrl: './restabler.page.html',
  styleUrls: ['./restabler.page.scss'],

})
export class RestablerPage implements OnInit {

  constructor(public router:Router,public alertController: AlertController) { }

  data:any={
    correo:""
  }

  ngOnInit() {


  }

  home(){
    this.router.navigate(['/home']);
  }

  async presentAlert() {
    if(this.data.correo!=""){
      const alert = await this.alertController.create({
        header: 'Correo enviado exitosamente',
        subHeader: 'Se ha enviado un correo de recuperación de contraseña al email registrado para el usuario: '+ this.data.correo,
        buttons: ['Aceptar'

      ],
      });
      await alert.present();
    }
    else{
      const alert = await this.alertController.create({
        header: 'ERROR',
        subHeader: 'Debe ingresar correo electrónico',
        buttons: ['Aceptar'],
      });
      await alert.present();
    }
  }

} 