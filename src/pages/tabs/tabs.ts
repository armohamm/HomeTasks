import { Component } from '@angular/core';

import { MyTasksPage } from '../myTasks/myTasks';
import { ExpensesPage } from '../expensesPage/expensesPage';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = MyTasksPage;
  tab3Root = ExpensesPage;

  constructor() {

  }
}
