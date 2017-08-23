import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'expensesPage.html'
})
export class ExpensesPage {

	expenses = [
		{ "ExpenseId": 0, "Description": "New Chair", "Type": "Kitchen", "Value": 140.40 },
		{ "ExpenseId": 1, "Description": "Internet billing", "Type": "Internet", "Value": 45.00 },
		{ "ExpenseId": 2, "Description": "New plates", "Type": "Kitchen", "Value": 20.00 },
		{ "ExpenseId": 3, "Description": "New soap", "Type": "Bathroom", "Value": 5.00 }
	];

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {

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
			   console.log('Cancel clicked');
          }
        }
      ]
    });
    prompt.present();
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
		  return value.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
	  }
}
