import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule} from '@angular/forms'

import { AppComponent } from './app.component';
import { routes } from './app.routes';

import { LoginModule } from './login/login.module';
import { SignupModule } from './signup/signup.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { SharedModule } from './shared/shared.module';
import { Ng2AutoCompleteModule } from 'ng2-auto-complete';

import {AuthService} from './services/auth/auth.service'

import {BsDropdownModule,AlertModule} from 'ng2-bootstrap'

import { CKEditorModule } from 'ng2-ckeditor';
// import { HTTP_PROVIDERS } from 'angular2/http';


import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';
import {ConnectionService} from './services/connection.service';

import {UserService} from './services/user.service';

import {EventService} from './services/event/event.service';
import {WorkshopService} from './services/workshop/workshop.service';
import {VolunteerService} from './services/volunteer/volunteer.service';
	

import {DataTableModule} from 'angular-2-data-table-bootstrap4';


// firebase config
export const firebaseConfig = {
	
	apiKey: "AIzaSyCr1tUZ4sGglBsQbRKn1m5klzhiV-IlCLs",
    authDomain: "dhwanicet-7466c.firebaseapp.com",
    databaseURL: "https://dhwanicet-7466c.firebaseio.com",
    storageBucket: "dhwanicet-7466c.appspot.com",
    messagingSenderId: "1056048590412"
};


const myFirebaseAuthConfig = {
  provider: AuthProviders.Google,
  method: AuthMethods.Popup
};

@NgModule({
	imports: [
	    FormsModule,
		BrowserModule,
		HttpModule,
		RouterModule.forRoot(routes),
		LoginModule,
		Ng2AutoCompleteModule,
		SignupModule,
		DashboardModule,
		SharedModule.forRoot(),
		BsDropdownModule.forRoot(),
		AlertModule.forRoot(),
	    AngularFireModule.initializeApp(firebaseConfig, myFirebaseAuthConfig),
	    
	    CKEditorModule
	],
	declarations: [AppComponent],
	providers: [{
		provide: APP_BASE_HREF,
		// useValue: '<%= APP_BASE %>'
		useValue: '/'
	}, ConnectionService
	, UserService
	// ,HTTP_PROVIDERS
	,AuthService
	,EventService,
	WorkshopService,
	VolunteerService
	],
	bootstrap: [AppComponent]

})

export class AppModule { }
