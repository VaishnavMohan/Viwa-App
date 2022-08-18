import { Component, Input, OnInit } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { DataService, memberlist } from '../services/data.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {
  
@Input() id: string;
member: memberlist = null;

  constructor(
    private dataService: DataService,
    private modalCtrl: ModalController,
    private toastCtrl: ToastController
  ) { }

  ngOnInit() {
    this.dataService.getMembersById(this.id).subscribe(res => {
      this.member = res;
      
    });
  }

  async updateMember(){
    this.dataService.updateMember(this.member);
    const toast = await this.toastCtrl.create({
      message: 'Member Updated!',
      duration: 1000
    });
    toast.present();
  }

async deleteMember(){
 await this.dataService.deleteMember(this.member);
  this.modalCtrl.dismiss();
}
  
}
