import { Component } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  nome: any;
  lista: any[] = [];
  constructor(public alertCtrl: AlertController, public toastCtrl: ToastController) { }

  adicionar() {
    if (this.nome == undefined) {
      this.exibeAlert('O campo não pode ser vazio')
    } else {
      let item = this.nome
      this.lista.push(item);
      this.exibeToast(item + ' está na lista');
      this.nome = undefined
    }   
  }

  remover(dado: any) {
    for (let i = 0; i <= this.lista.length; i++){
      if (dado == this.lista[i]) {
        this.lista.splice(i, 1)
        this.exibeToast(dado + ' saiu da lista');
      }
    }
      
  }

  async exibeAlert(msg: any) {
    const alert = await this.alertCtrl.create({
      header: 'Alert',
      message: msg,
      buttons: ['OK'],
    });

    await alert.present();
  }

  async exibeToast(msg: any) {
    const toast = await this.toastCtrl.create({
      message: msg,
      duration: 1500,
      position: 'bottom',
    });
    await toast.present();
  }
}
