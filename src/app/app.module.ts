import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { MyTasksPage } from '../pages/myTasks/myTasks';
import { ExpensesPage } from '../pages/expensesPage/expensesPage';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { CompletedTasksPage } from '../pages/completedTasks/completedTasks';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

export const firebaseConfig = {
  apiKey: "AIzaSyABlhckzPFpFAjjhKNkumLkxR1VFe8XoQM",
  authDomain: "hometasks-1e6f8.firebaseapp.com",
  databaseURL: "https://hometasks-1e6f8.firebaseio.com",
  projectId: "hometasks-1e6f8",
  storageBucket: "hometasks-1e6f8.appspot.com",
  messagingSenderId: "834561791283"
}

@NgModule({
  declarations: [
    MyApp,
    MyTasksPage,
    ExpensesPage,
    HomePage,
    TabsPage,
	CompletedTasksPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
	AngularFireModule.initializeApp(firebaseConfig),
	AngularFireDatabaseModule       
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MyTasksPage,
    ExpensesPage,
    HomePage,
    TabsPage,
	CompletedTasksPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
