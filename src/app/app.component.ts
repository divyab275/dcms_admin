import { Component, ViewContainerRef,ViewEncapsulation } from '@angular/core';
import { Config } from './shared/index';
import { AngularFire } from 'angularfire2';

/**
 * This class represents the main application component. Within the @Routes annotation is the configuration of the
 * applications routes, configuring the paths for the lazy loaded components (HomeComponent, AboutComponent).
 */
@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls:['../assets/sass/app.scss'],
  encapsulation:ViewEncapsulation.None
})

export class AppComponent {
	private viewContainerRef: ViewContainerRef;
	public constructor(viewContainerRef:ViewContainerRef, af : AngularFire) {
		// You need this small hack in order to catch application root view container ref
		this.viewContainerRef = viewContainerRef;
		// console.log('Environment config', Config);
	}
}
