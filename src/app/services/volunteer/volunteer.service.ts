import { Injectable ,Inject} from '@angular/core';
import { Headers, Http } from '@angular/http';
import {ConnectionService} from '../connection.service';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import  * as Promise from 'bluebird'
import {AngularFire, FirebaseApp,AuthProviders,AuthMethods} from 'angularfire2';

@Injectable()
export class VolunteerService extends ConnectionService{

	private volunteerApi = this.serverUrl + '/volunteer';

	constructor(public af: AngularFire, @Inject(FirebaseApp) private firebaseApp: any, protected http: Http) {
		super(af,firebaseApp,http);
	}

	getRegisteredEvents(student)
	{
		return this.getHeaders()
		.then(headers=>{
			return this.http
			.post(this.volunteerApi+'/registeredEvents',student,{
				headers:headers
			})
			.map(res=>res.json())
			.toPromise()
		})
	}

}
