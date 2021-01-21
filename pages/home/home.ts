import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  gender: string;
  height: number;



constructor(public navCtrl: NavController) {
  this.Robinson_formula = this.height - 5 * 1.9 + 52;
  



  }

}
