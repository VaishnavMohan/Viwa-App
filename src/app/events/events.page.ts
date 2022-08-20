import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { EventmodalPage } from '../eventmodal/eventmodal.page';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.page.html',
  styleUrls: ['./events.page.scss'],
})
export class EventsPage implements OnInit {

events = [];

  constructor( 
    private dataService: DataService,
    private alertCtrl: AlertController,
    private modalCtrl: ModalController
    ) {
    this.dataService.getEvents().subscribe(res => {
      console.log(res);
      this.events = res;
    });
   }

async openNote(event) {
const eventmodal = await this.modalCtrl.create({
  component: EventmodalPage,
  componentProps:{ id: event.id},
  breakpoints: [0,0.5,0.8],
  initialBreakpoint: 0.7
});
eventmodal.present();
}

async addEvent(){
  const alert = await this.alertCtrl.create({
    header: 'Add Campaigne',
    inputs: [
      {
        name: 'Title',
        placeholder: 'Add Campaigne Name',
        type: 'text'
      },
      {
        name: 'Description',
        placeholder: 'Add Description',
        type: 'text'
      },
      {
        name: 'Amount',
        placeholder: 'Needed Amount',
        type: 'text'
      },
      // {
      //   name: 'subscription',
      //   placeholder: 'Subscribed or Not',
      //   type: 'text'
      // },
     
    ],
    buttons:[
      {
        text: 'Cancel',
        role: 'cancel'
      },
      {
        text: 'Add',
        handler: (res) => {
          this.dataService.addEvent({
            Title: res.Title, 
            Description: res.Description,
            Amount: res.Amount,
            // subscription: res.subsciption,
            // date: res.date
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
