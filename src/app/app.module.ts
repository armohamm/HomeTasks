import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { MyTasksPage } from '../pages/myTasks/myTasks';
import { ExpensesPage } from '../pages/expensesPage/expensesPage';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

export const firebaseConfig = {
  apiKey: "AIzaSyABlhckzPFpFAjjhKNkumLkxR1VFe*****",
  authDomain: "hometasks-1e***.firebaseapp.com",
  databaseURL: "https://hometasks-1e***.firebaseio.com",
  projectId: "hometasks-1e***",
  storageBucket: "",
  messagingSenderId: "8345617912**"
}

@NgModule({
  declarations: [
    MyApp,
    MyTasksPage,
    ExpensesPage,
    HomePage,
    TabsPage
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
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
