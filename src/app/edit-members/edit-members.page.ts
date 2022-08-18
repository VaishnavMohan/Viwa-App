import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { FormGroup, FormBuilder } from "@angular/forms";
import { MemberService } from '../shared/members.service';
@Component({
  selector: 'app-edit-members',
  templateUrl: './edit-members.page.html',
  styleUrls: ['./edit-members.page.scss'],
})
export class EditMembersPage implements OnInit {
  updateBookingForm: FormGroup;
  id: any;
  constructor(
    private aptService: MemberService,
    private actRoute: ActivatedRoute,
    private router: Router,
    public fb: FormBuilder
  ) {
    this.id = this.actRoute.snapshot.paramMap.get('id');
    this.aptService.getBooking(this.id).valueChanges().subscribe(res => {
      this.updateBookingForm.setValue(res);
    });
  }
  ngOnInit() {
    this.updateBookingForm = this.fb.group({
      name: [''],
      email: [''],
      mobile: ['']
    })
    console.log(this.updateBookingForm.value)
  }
  updateForm() {
    this.aptService.updateBooking(this.id, this.updateBookingForm.value)
      .then(() => {
        this.router.navigate(['/memberlist']);
      })
      .catch(error => console.log(error));
  }
}