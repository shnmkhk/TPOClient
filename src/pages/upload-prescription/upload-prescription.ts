import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';

import { ItemCreatePage } from '../item-create/item-create';
import { ItemDetailPage } from '../item-detail/item-detail';
import { ThankyouPage } from '../thankyou/thankyou';
import { Items } from '../../providers/providers';

import { Item } from '../../models/item';
import { FileChooser } from '@ionic-native/file-chooser';

@Component({
  selector: 'page-upload-prescription',
  templateUrl: 'upload-prescription.html'
})
export class UploadPrescriptionPage {
  currentItems: Item[];
  selectedFilePath:any;
  
  chooseFile() {
    this.fileChooser.open()
    .then(uri => this.selectedFilePath = uri)
    .catch(e => console.log(e));
  }

  uploadFile() {
    this.navCtrl.push(ThankyouPage);
  }
  constructor(public navCtrl: NavController, public items: Items, public modalCtrl: ModalController,
  private fileChooser: FileChooser) {
    this.currentItems = this.items.query();
  }

  goBack() {
    this.navCtrl.pop();
  }
  /**
   * The view loaded, let's query our items for the list
   */
  ionViewDidLoad() {
  }

  /**
   * Prompt the user to add a new item. This shows our ItemCreatePage in a
   * modal and then adds the new item to our data source if the user created one.
   */
  addItem() {
    let addModal = this.modalCtrl.create(ItemCreatePage);
    addModal.onDidDismiss(item => {
      if (item) {
        this.items.add(item);
      }
    })
    addModal.present();
  }

  /**
   * Delete an item from the list of items.
   */
  deleteItem(item) {
    this.items.delete(item);
  }

  /**
   * Navigate to the detail page for this item.
   */
  openItem(item: Item) {
    this.navCtrl.push(ItemDetailPage, {
      item: item
    });
  }
}
