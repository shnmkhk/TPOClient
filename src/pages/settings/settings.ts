import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NavController, NavParams } from 'ionic-angular';

import { Settings } from '../../providers/settings';
import { WelcomePage } from '../welcome/welcome';
import { TranslateService } from '@ngx-translate/core';
import { App } from 'ionic-angular';
/**
 * The Settings page is a simple form that syncs with a Settings provider
 * to enable the user to customize settings for the app.
 *
 */
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html'
})
export class SettingsPage {
  account: { name: string, addr_1: string, addr_2: string, city: string, favourite: string } = {
    name: 'MyFullName',
    addr_1: '#001, Fortune Heights',
    addr_2: 'Madhapur',
    city: 'Hyderabad',
    favourite: 'Sri Surya Medicals, Kukatpally'
  };

  logout(){
   this.appCtrl.getRootNav().setRoot(WelcomePage);
  }

  constructor(public navCtrl: NavController,
    public settings: Settings,
    public formBuilder: FormBuilder,
    public navParams: NavParams,
    public translate: TranslateService,
  public appCtrl: App) {
  }
}
