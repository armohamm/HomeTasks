import { Component } from '@angular/core';
import { NavController, AlertController, LoadingController  } from 'ionic-angular';
import { Tasks } from "./Tasks";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [Tasks]
})
export class HomePage {
		
  tasks = [
		{ "TaskId": 0, "Name": "Chris", "Task": "Clean the bathroom", "Status": 0, "Deadline": '2017-08-30' },
		{ "TaskId": 1, "Name": "William", "Task": "Clean the kitchen", "Status": 1, "Deadline": '2017-08-30' },
		{ "TaskId": 2, "Name": "Paul", "Task": "Take the trash out", "Status": 2, "Deadline": '2017-08-30' },
		{ "TaskId": 3, "Name": "Ash", "Task": "Clean the floors", "Status": 1, "Deadline": '2017-08-30' }
	];

  constructor(public navCtrl: NavController, public alertCtrl: AlertController, public loadingCtrl: LoadingController) {
	
	  
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
		task.TaskId = this.tasks.length + 1;
		task.Name = data.ResponsablePerson;
		task.Task = data.Title;
		task.Status = 2;
		task.Deadline = data.Deadline.toString();
		this.tasks.push(task);
  }
  
}
