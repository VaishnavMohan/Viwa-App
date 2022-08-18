import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { ModalPage } from '../modal/modal.page';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.page.html',
  styleUrls: ['./subscription.page.scss'],
})
export class SubscriptionPage implements OnInit {

  members = [];

  constructor( 
    private dataService: DataService,
    private alertCtrl: AlertController,
    private modalCtrl: ModalController
    ) {
    this.dataService.getMembers().subscribe(res => {
      console.log(res);
      this.members = res;
    });
   }

async openNote(member) {
const modal = await this.modalCtrl.create({
  component: ModalPage,
  componentProps:{ id: member.id},
  breakpoints: [0,0.5,0.8],
  initialBreakpoint: 0.7
});
modal.present();
}

async addMember(){
  const alert = await this.alertCtrl.create({
    header: 'Add Member',
    inputs: [
      {
        name: 'name',
        placeholder: 'Add Member Name',
        type: 'text'
      },
      // {
      //   name: 'mobile',
      //   placeholder: 'Mobile Number',
      //   type: 'text'
      // },
      // {
      //   name: 'email',
      //   placeholder: 'Add Member Email',
      //   type: 'text'
      // },
      // {
      //   name: 'subscription',
      //   placeholder: 'Subscribed or Not',
      //   type: 'text'
      // },
      {
        name: 'date',
        placeholder: 'Add Subscribed Date',
        type: 'date'
      },
    ],
    buttons:[
      {
        text: 'Cancel',
        role: 'cancel'
      },
      {
        text: 'Add',
        handler: (res) => {
          this.dataService.addMember({
            name: res.name, 
            mobile: res.mobile,
            email: res.email,
            // subscription: res.subsciption,
            date: res.date
          })
        }
      }
    ]
  });
  await alert.present(); 
}

  ngOnInit() {
  }

}
