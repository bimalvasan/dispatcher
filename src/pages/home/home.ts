import { Component } from '@angular/core';
import { FabContainer, NavController } from 'ionic-angular';
import { SetupPage } from '../../app/setup/setup'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  setup = SetupPage;

  constructor(public navCtrl: NavController) {

  }

  close(fab: FabContainer) {
    fab.close();
    //this.navCtrl.push(SetupPage, {}, { animate: true, direction: 'forward' });
  }

}
