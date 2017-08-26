import { Component } from '@angular/core';
import { NavController, AlertController, LoadingController  } from 'ionic-angular';
import { Tasks } from "./Tasks";

import { FirebaseListObservable, AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [Tasks]
})
export class HomePage {
	
	tasks: FirebaseListObservable<any>;

  constructor(public navCtrl: NavController, 
				public alertCtrl: AlertController, 
				public loadingCtrl: LoadingController,
				public database: AngularFireDatabase) {
	
	this.tasks = this.database.list('/tasks');
	  
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
          name: 'ResponsablePerson',
          placeholder: 'Responsable Person'
        },
		{
          name: 'Deadline',
          placeholder: 'Deadline',
		  type: 'Date'
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
			this.presentLoading(data);
			
          }
        }
      ]
    });
    prompt.present();
  }
  
  presentLoading(data) {
    let loading = this.loadingCtrl.create({
    content: 'Please wait...'
	});

  loading.present();

  setTimeout(() => {
    loading.dismiss();
	this.addTask(data);
  }, 2000);
    
	
  }
  
  addTask(data){
		var task = new Tasks();
		task.Name = data.ResponsablePerson;
		task.Task = data.Title;
		task.Status = 2;
		task.Deadline = data.Deadline.toString();
		this.tasks.push(task);
  }
  
}
