import { Injectable } from '@angular/core';
import { Members } from './members';
import {
  AngularFireDatabase,
  AngularFireList,
  AngularFireObject,
} from '@angular/fire/compat/database';
@Injectable({
  providedIn: 'root',
})
export class MemberService {
  bookingListRef: AngularFireList<any>;
  bookingRef: AngularFireObject<any>;
  constructor(private db: AngularFireDatabase) {}
  // Create
  createBooking(apt: Members) {
    return this.bookingListRef.push({
      name: apt.name,
      email: apt.email,
      mobile: apt.mobile,
      subscribe: apt.subscribe,
      date: apt.date
    });
  }
  // Get Single
  getBooking(id: string) {
    this.bookingRef = this.db.object('/members/' + id);
    return this.bookingRef;
  }
  // Get List
  getBookingList() {
    this.bookingListRef = this.db.list('/members');
    return this.bookingListRef;
  }
  // Update
  updateBooking(id, apt: Members) {
    return this.bookingRef.update({
      name: apt.name,
      email: apt.email,
      mobile: apt.mobile,
      subscribe: apt.subscribe,
      date: apt.date
    });
  }
  // Delete
  deleteBooking(id: string) {
    this.bookingRef = this.db.object('/members/' + id);
    this.bookingRef.remove();
  }
}