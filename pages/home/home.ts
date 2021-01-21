import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  styleUrls: ['home.css']
})
export class HomePage {
  gender: string;
  feet: number;
  inches: number;
  robinson_formula: number;
  miller_formula: number;
  hamwi_formula: number;
  devine_formula: number;
  robinson_formula2: number;
  miller_formula2: number;
  hamwi_formula2: number;
  devine_formula2: number;



constructor(public navCtrl: NavController) {}
  calculateIW() {
  this.robinson_formula = this.inches * 1.9 + 52;
  this.miller_formula = this.inches * 1.41 + 56.2;
  this.hamwi_formula = this.inches * 2.7 + 48.0;
  this.devine_formula = this.inches * 2.3 + 50.0;
  this.robinson_formula2 = this.inches * 1.7 + 49;
  this.miller_formula2 = this.inches * 1.36 + 53.1;
  this.hamwi_formula2 = this.inches * 2.2 + 45.5;
  this.devine_formula2 = this.inches * 2.3 + 45.5;

 if (this.gender == "Male") {
   this.robinson_formula = Math.round (this.inches * 1.9 + 52);
   this.miller_formula = Math.round (this.inches * 1.41 + 56.2);
   this.hamwi_formula = Math.round (this.inches * 2.7 + 48.0);
   this.devine_formula = Math.round (this.inches * 2.3 + 50.0);
  

 } else if (this.gender == "Female") {
   this.robinson_formula2 = Math.round (this.inches * 1.7 + 49);
   this.miller_formula2 = Math.round (this.inches * 1.36 + 53.1);
   this.hamwi_formula2 = Math.round (this.inches * 2.2 + 45.5);
   this.devine_formula2 = Math.round (this.inches * 2.3 + 45.5);
  }
  


 }





  }


