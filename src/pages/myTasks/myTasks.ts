import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

import { FirebaseListObservable, AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'page-about',
  templateUrl: 'myTasks.html'
})
export class MyTasksPage {

  tasks: FirebaseListObservable<any>;

  constructor(public navCtrl: NavController, 
    public alertCtrl: AlertController,
    public database: AngularFireDatabase) {

      this.tasks = this.database.list('/tasks', {
		  query: {
		  orderByChild: 'Status',
		  equalTo: 2
		  }
	  });
}
  
  confirmChange(task){
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
            task.Status = 1;
            this.database.object('/tasks/' + task.$key).update(task);
          }
        }
      ]
    });
    confirm.present();
  }

}
