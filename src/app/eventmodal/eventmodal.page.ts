import { Component, Input, OnInit } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { DataService, eventlist } from '../services/data.service';

@Component({
  selector: 'app-eventmodal',
  templateUrl: './eventmodal.page.html',
  styleUrls: ['./eventmodal.page.scss'],
})
export class EventmodalPage implements OnInit {
  @Input() id: string;
  event: eventlist = null;
  
    constructor(
      private dataService: DataService,
      private modalCtrl: ModalController,
      private toastCtrl: ToastController
    ) { }
  
    ngOnInit() {
      this.dataService.getEventsById(this.id).subscribe(res => {
        this.event = res;
        
      });
    }
  
    async updateEvent(){
      this.dataService.updateEvent(this.event);
      const toast = await this.toastCtrl.create({
        message: 'Campaigne Updated!',
        duration: 1000
      });
      toast.present();
    }
  
  async deleteEvent(){
   await this.dataService.deleteEvent(this.event);
    this.modalCtrl.dismiss();
  }

}
