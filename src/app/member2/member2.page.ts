import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { ModalPage } from '../modal/modal.page';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-member2',
  templateUrl: './member2.page.html',
  styleUrls: ['./member2.page.scss'],
})
export class Member2Page implements OnInit {

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
  initialBreakpoint: 0.8
});
modal.present();
}

async addMember(){
  const alert = await this.alertCtrl.create({
    header: 'Add Member',
    inputs: [
      {
        name: 'memberid',
        placeholder: 'Add Member Id',
        type: 'number'
      },
      {
        name: 'name',
        placeholder: 'Add Member Name',
        type: 'text'
      },
      {
        name: 'Qid',
        placeholder: 'Qid Number',
        type: 'text'
      },
      {
        name: 'email',
        placeholder: 'Add Member Email',
        type: 'text'
      },
      // {
      //   name: 'subscription',
      //   placeholder: 'Subscribed or Not',
      //   type: 'text'
      // },
      {
        name: 'date',
        placeholder: 'Date of Join',
        type: 'date'
      },
      {
        name: 'status',
        placeholder: 'Active or Inactive',
        type: 'text'
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
            memberid: res.memberid,
            name: res.name, 
            Qid: res.Qid,
            email: res.email,
            // subscription: res.subsciption,
            date: res.date,
            status: res.status,
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
