import { Component } from '@angular/core';
import { ToastController } from 'ionic-angular';

@Component({
  selector: 'page-broadcaster',
  templateUrl: 'broadcaster.html'
})
export class BroadcasterPage {
  isBroadcasting = false;
  isPending = false;

  constructor(private toastCtrl: ToastController) {}

  async start() {
    if (this.isBroadcasting || this.isPending) return;
    this.isPending = true;
    const toast = this.toastCtrl.create({
      message: 'Starting broadcast...',
      position: 'middle',
    });
    toast.present();

    console.log('TODO start broadcasting');
    await new Promise(resolve => setTimeout(resolve, 3000)); // Mockup: simulated startup time

    toast.dismiss();
    this.isBroadcasting = true;
    this.isPending = false;
  }

  async stop() {
    if (!this.isBroadcasting || this.isPending) return;
    this.isPending = true;
    const toast = this.toastCtrl.create({
      message: 'Ending broadcast...',
      position: 'middle'
    });
    toast.present();

    console.log('TODO: stop broadcasting');
    await new Promise(resolve => setTimeout(resolve, 2000)); // Mockup: simulated end time

    toast.dismiss();
    this.isBroadcasting = false;
    this.isPending = false;
  }
}
