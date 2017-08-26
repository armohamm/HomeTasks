import { Component } from '@angular/core';
import { NavController, AlertController, LoadingController } from 'ionic-angular';
import { Expense } from "./expense";

@Component({
  selector: 'page-contact',
  templateUrl: 'expensesPage.html',
  providers: [Expense]
})
export class ExpensesPage {

	expenses = [
		{ "ExpenseId": 0, "Description": "New Chair", "Type": "Kitchen", "Value": 140.40 },
		{ "ExpenseId": 1, "Description": "Internet billing", "Type": "Internet", "Value": 45.00 },
		{ "ExpenseId": 2, "Description": "New plates", "Type": "Kitchen", "Value": 20.00 },
		{ "ExpenseId": 3, "Description": "New soap", "Type": "Bathroom", "Value": 5.00 }
	];

  constructor(public navCtrl: NavController, public alertCtrl: AlertController, public loadingCtrl: LoadingController) {

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
		expense.ExpenseId = this.expenses.length + 1;
		expense.Description = data.Description;
		expense.Type = data.Type;
		expense.Value = data.Value;
		this.expenses.push(expense);
  }

  viewExpense(id){
	  var expense = this.expenses.find(myObj => myObj.ExpenseId == id);
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
