import { Component } from '@angular/core';
import { Platform, ToastController } from 'ionic-angular';

// Application id generated at https://dashboard.irisplatform.io/developer
const APPLICATION_ID:string = 'CHANGEME';

@Component({
  selector: 'page-broadcaster',
  templateUrl: 'broadcaster.html'
})
export class BroadcasterPage {
  isBroadcasting = false;
  isPending = false;
  broadcaster: any;

  constructor(
    private toastCtrl: ToastController,
    public platform: Platform) {

    platform.ready().then(() => {
      // Using array syntax workaround, since types are not declared.
      if (window['bambuser']) {
        this.broadcaster = window['bambuser']['broadcaster'];
        this.broadcaster.setApplicationId(APPLICATION_ID);
      } else {
        // Cordova plugin not installed or running in a web browser
      }
    });
  }

  async ionViewDidEnter() {
    if (APPLICATION_ID === 'CHANGEME') {
      await new Promise(resolve => setTimeout(resolve, 500)); // Let page animations to finish before using alert()
      alert('Warning: APPLICATION_ID is not set. Get your application id at https://dashboard.irisplatform.io/developer and update pages/broadcaster/broadcaster.ts, then rebuild the app.');
    }

    // Engage our Ionic CSS background overrides that ensure viewfinder is visible.
    document.getElementsByTagName('body')[0].classList.add("show-viewfinder");

    if (!this.broadcaster) {
      await new Promise(resolve => setTimeout(resolve, 500)); // Let page animations to finish before using alert()
      alert('broadcaster is not ready yet');
      return;
    }

    console.log('Starting viewfinder');
    this.broadcaster.showViewfinderBehindWebView();
  }

  ionViewWillLeave() {
    // Disengage our Ionic CSS background overrides, to ensure the rest of the app looks ok.
    document.getElementsByTagName('body')[0].classList.remove("show-viewfinder");

    console.log('Removing viewfinder');
    if (this.broadcaster) {
      this.broadcaster.hideViewfinder();
    }
  }

  async start() {
    if (this.isBroadcasting || this.isPending) return;
    this.isPending = true;
    const toast = this.toastCtrl.create({
      message: 'Starting broadcast...',
      position: 'middle',
    });
    await toast.present();

    console.log('Starting broadcast');
    try {
      await this.broadcaster.startBroadcast();
      toast.dismiss();
      this.isBroadcasting = true;
      this.isPending = false;
    } catch (e) {
      toast.dismiss();
      this.isPending = false;
      alert('Failed to start broadcast');
      console.log(e);
    }
  }

  async stop() {
    if (!this.isBroadcasting || this.isPending) return;
    this.isPending = true;
    const toast = this.toastCtrl.create({
      message: 'Ending broadcast...',
      position: 'middle'
    });
    await toast.present();

    console.log('Ending broadcast');
    try {
      await this.broadcaster.stopBroadcast();
      toast.dismiss();
      this.isBroadcasting = false;
      this.isPending = false;
    } catch (e) {
      toast.dismiss();
      this.isPending = false;
      alert('Failed to stop broadcast');
      console.log(e);
    }
  }
}
