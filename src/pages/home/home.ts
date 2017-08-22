import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

	  
  tasks = [
		{ "id": 0, "name": "Chris", "task": "Clean the bathroom", "status": 0, "deadline": "08/30/2017" },
		{ "id": 1, "name": "William", "task": "Clean the kitchen", "status": 1, "deadline": "08/30/2017" },
		{ "id": 2, "name": "Paul", "task": "Take the trash out", "status": 2, "deadline": "08/30/2017" },
		{ "id": 1, "name": "Ash", "task": "Clean the floors", "status": 1, "deadline": "08/30/2017" }
	];

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
