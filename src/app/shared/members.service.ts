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
      memberId: apt.memberId,
      name: apt.name,
      email: apt.email,
      Qid: apt.Qid,
      subscribe: apt.subscribe,
      date: apt.date,
      status: apt.status
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
      memberId: apt.memberId,
      name: apt.name,
      email: apt.email,
      Qid: apt.Qid,
      subscribe: apt.subscribe,
      date: apt.date,
      status: apt.status
    });
  }
  // Delete
  deleteBooking(id: string) {
    this.bookingRef = this.db.object('/members/' + id);
    this.bookingRef.remove();
  }
}