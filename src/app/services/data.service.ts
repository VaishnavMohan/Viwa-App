import { Injectable } from '@angular/core';
import { collectionData, docData, Firestore, addDoc, collection, doc  } from '@angular/fire/firestore';
import { deleteDoc, updateDoc } from 'firebase/firestore';
// import { addDoc, collection, doc } from 'firebase/firestore';
import { Observable } from 'rxjs';

export class memberlist{
  [prop: string]: any;
  id?: string;
  name?: string;
  mobile?: string;
  email?: string;
  // subscription: string;
  date?: Date;
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
    const memberRef = collection(this.firestore, 'members');
    return addDoc(memberRef, member);
  }

  deleteMember(member: memberlist){
    const memberDocRef = doc(this.firestore, `members/${member.id}`);
    return deleteDoc(memberDocRef);
  }

  updateMember(member: memberlist){
    const memberDocRef = doc(this.firestore, `members/${member.id}`);
    return updateDoc(memberDocRef, {id:member.id, name: member.name, date: member.date});
  }

}
