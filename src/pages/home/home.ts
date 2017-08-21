import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {

  }
  
 showPrompt() {
    let prompt = this.alertCtrl.create({
      title: 'Adding new Task',
      message: "Enter a name and deadline for this task that you're adding",
      inputs: [
        {
          name: 'Title',
          placeholder: 'Title'
        },
		{
          name: 'Deadline',
          placeholder: 'Deadline'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Add',
          handler: data => {
            console.log('Add clicked');
          }
        }
      ]
    });
    prompt.present();
  }
}
