import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  title = "Grocery";

  items = [{
    name: "Milk",
    qty: 2
  },
  {
    name: "Bread",
    qty: 1
  },
  {
    name: "Banana",
    qty: 3
  },
  {
    name: "Sugar",
    qty: 1
  },
  {
    name: "Butter",
    qty: 1
  }

];

  constructor(public navCtrl: NavController, public toastCtrl: ToastController, public alertCtrl: AlertController) {

  }

  removeItem(item, index) {
    //console.log("Removing Item - ", item);

    const toast = this.toastCtrl.create({
      message: 'Removing ' + item.name + " ...",
      duration: 3000
    });

    toast.present(); 

    this.items.splice(index,1);
  }

  addItem() {
    this.showAddItemPrompt(); 
  }

  showAddItemPrompt() {
    const prompt = this.alertCtrl.create({
      title: 'Add Item',
      message: "Please enter item...",
      inputs: [
        {
        name: 'name',
        placeholder: 'Name'
      },
      {
        name: 'qty',
        placeholder: 'Quantity'
      },
    ],
    buttons: [
      {
      text: 'Cancel',
      handler: data => {
        console.log('Cancel clicked');
        }
      },
      {
        text: 'Save',
        handler: item => {
          console.log('Save clicked', item);
          this.items.push(item);
        }
      }
    ] 
    });
    prompt.present(); 
  }
}
