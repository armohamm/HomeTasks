import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'myTasks.html'
})
export class MyTasksPage {

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {

  }
  
  confirmChange(){
	  let confirm = this.alertCtrl.create({
      title: 'Confirm',
      message: 'Are you sure that you finished this task?',
      buttons: [
        {
          text: 'No',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Yes',
          handler: () => {
            console.log('Agree clicked');
          }
        }
      ]
    });
    confirm.present();
  }

}
