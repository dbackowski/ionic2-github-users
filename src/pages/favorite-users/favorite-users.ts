import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';

import { FavoriteUsers } from "../../providers/favorite-users";
import { UserDetailsPage } from '../user-details/user-details';

@Component({
  selector: 'page-favorite-users',
  templateUrl: 'favorite-users.html'
})
export class FavoriteUsersPage {
  public users: Array<Object>;

  constructor(
    public navCtrl: NavController, 
    private favoriteUsers: FavoriteUsers, 
    private toastCtrl: ToastController
  ) {}

  ionViewDidEnter() {
    this.favoriteUsers.load().subscribe(
      (users) => {
        this.users = users;
      },
      (error) => {
        this.toastCtrl.create({
          message: 'Error occured.',
          duration: 3000,
          position: 'bottom'
        }).present();
      }
    );
  }

  goToDetails(login: string) {
    this.navCtrl.push(UserDetailsPage, {login});
  }
}
