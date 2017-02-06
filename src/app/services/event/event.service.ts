import { Injectable ,Inject} from '@angular/core';
import { Headers, Http } from '@angular/http';
import {ConnectionService} from '../connection.service';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import  * as Promise from 'bluebird'
import {AngularFire, FirebaseApp,AuthProviders,AuthMethods} from 'angularfire2';



@Injectable()
export class EventService extends ConnectionService{


	private eventApi = this.serverUrl + '/event';

	constructor(public af: AngularFire, @Inject(FirebaseApp) firebase: any, protected http: Http) {
		super(af,firebase,http);
	}

	getEvents(){
		return this.getHeaders()
		.then(headers=>{
			return this.http
			.get(this.eventApi,{
				headers:headers
			})
			.map(res=>res.json())
			.toPromise()
		})
	}
	
}
