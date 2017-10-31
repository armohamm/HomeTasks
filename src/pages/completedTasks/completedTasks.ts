import { Component } from '@angular/core';
import { NavController, AlertController, LoadingController  } from 'ionic-angular';

import { FirebaseListObservable, AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'page-completedTasks',
  templateUrl: 'completedTasks.html',
})
export class CompletedTasksPage {
	
  tasks: FirebaseListObservable<any>;

  constructor(public navCtrl: NavController, 
				public alertCtrl: AlertController, 
				public loadingCtrl: LoadingController,
				public database: AngularFireDatabase) {
	
	this.tasks = this.database.list('/tasks', {
		  query: {
		  orderByChild: 'Status',
		  equalTo: 1
		  }
	  });
	  
  }
  
}
