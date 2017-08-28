import { Component } from '@angular/core';
import { NavController, AlertController, LoadingController } from 'ionic-angular';
import { Expense } from "./expense";

import { FirebaseListObservable, AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'page-contact',
  templateUrl: 'expensesPage.html',
  providers: [Expense]
})
export class ExpensesPage {
  
  expenses: FirebaseListObservable<any>;

  constructor(public navCtrl: NavController, 
    public alertCtrl: AlertController, 
    public loadingCtrl: LoadingController,
    public database: AngularFireDatabase) {

   this.expenses = this.database.list('/expenses');
  }
  
  showPrompt() {
    let prompt = this.alertCtrl.create({
      title: 'Adding new Expense',
      message: "Enter a brief description, the type and the value for this expense that you're adding",
      inputs: [
        {
          name: 'Description',
          placeholder: 'Description'
        },
		{
          name: 'Type',
          placeholder: 'Type'
        },
		{
          name: 'Value',
          placeholder: 'Value',
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
	this.addExepense(data);
  }, 2000);
    
	
  }
  
  addExepense(data){
	  var expense = new Expense();
		expense.Description = data.Description;
		expense.Type = data.Type;
		expense.Value = data.Value;
		this.expenses.push(expense);
  }

  viewExpense(expense){
	  let alert = this.alertCtrl.create({
		  title: '<h1>' + expense.Description + '</h1>',
		  subTitle: '<b>Value:</b> $' +  this.formatMoney(expense.Value) + '<br/> <b>Type:</b> ' + expense.Type,
		  buttons: ['OK']
		});
		alert.present();
  }
	  
  formatMoney(value){
	  return parseFloat(value).toFixed(2);
  }
}
