import { Component, OnInit } from '@angular/core';
import { Members } from '../shared/members';
import { MemberService } from '../shared/members.service';

@Component({
  selector: 'app-memberlist',
  templateUrl: './memberlist.page.html',
  styleUrls: ['./memberlist.page.scss'],
})
export class MemberlistPage implements OnInit {
  Bookings = [];
  constructor(
    private aptService: MemberService
  ) { }
  ngOnInit() {
    this.fetchBookings();
    let bookingRes = this.aptService.getBookingList();
    bookingRes.snapshotChanges().subscribe(res => {
      this.Bookings = [];
      res.forEach(item => {
        let a = item.payload.toJSON();
        a['$key'] = item.key;
        this.Bookings.push(a as Members);
      })
    })
  }
  fetchBookings() {
    this.aptService.getBookingList().valueChanges().subscribe(res => {
      console.log(res)
    })
  }
  deleteBooking(id) {
    console.log(id)
    if (window.confirm('Do you really want to delete?')) {
      this.aptService.deleteBooking(id)
    }
  }
}