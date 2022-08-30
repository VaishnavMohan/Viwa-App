import { Injectable } from '@angular/core';
import { collectionData, docData, Firestore, addDoc, collection, doc  } from '@angular/fire/firestore';
import { deleteDoc, updateDoc } from 'firebase/firestore';
// import { addDoc, collection, doc } from 'firebase/firestore';
import { Observable } from 'rxjs';

export class memberlist{
  [prop: string]: any;
  id?: string;
  memberId?: number;
  name?: string;
  Qid?: string;
  email?: string;
  // subscription: string;
  date?: Date;
  status?: string;
}

export class eventlist{
  [prop: string]: any;
  id?: string;
  Title?: string;
  Description?: string;
  Amount?: string;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private firestore: Firestore) { }
  
  getMembers():Observable<memberlist[]> {
    const memberRef = collection(this.firestore, 'members');
    return collectionData(memberRef, {idField: 'id'}) as Observable<memberlist[]>;
  }

  getMembersById(id):Observable<memberlist[]> {
    const memberDocRef = doc(this.firestore, `members/${id}`);
    return docData(memberDocRef, {idField: 'id'}) as Observable<memberlist[]>;
  }

  addMember(member: memberlist){
    const eventRef = collection(this.firestore, 'members');
    return addDoc(eventRef, member);
  }

  deleteMember(member: memberlist){
    const memberDocRef = doc(this.firestore, `members/${member.id}`);
    return deleteDoc(memberDocRef);
  }

  updateMember(member: memberlist){
    const memberDocRef = doc(this.firestore, `members/${member.id}`);
    return updateDoc(memberDocRef, {id:member.id, name: member.name, date: member.date, Qid: member.Qid, status: member.status});
  }







  getEvents():Observable<eventlist[]> {
    const eventRef = collection(this.firestore, 'events');
    return collectionData(eventRef, {idField: 'id'}) as Observable<eventlist[]>;
  }

  getEventsById(id):Observable<eventlist[]> {
    const eventDocRef = doc(this.firestore, `events/${id}`);
    return docData(eventDocRef, {idField: 'id'}) as Observable<eventlist[]>;
  }

  addEvent(event: eventlist){
    const eventRef = collection(this.firestore, 'events');
    return addDoc(eventRef, event);
  }

  deleteEvent(event: eventlist){
    const eventDocRef = doc(this.firestore, `events/${event.id}`);
    return deleteDoc(eventDocRef);
  }

  updateEvent(event: eventlist){
    const eventDocRef = doc(this.firestore, `events/${event.id}`);
    return updateDoc(eventDocRef, {id:event.id, Title: event.Title, Description: event.Description, Amount: event.Amount});
  }

}
