import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {StaffService} from '../../services/staff.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  id = +this.activeRoute.snapshot.paramMap.get('id');

  constructor(private fb: FormBuilder,
              private staffService: StaffService,
              private router: Router,
              private activeRoute: ActivatedRoute) {
  }

  editStaff: FormGroup;

  ngOnInit() {
    const staff = this.staffService.findById(this.id);
    this.editStaff = this.fb.group({
      name: [staff.name],
      age: [staff.age],
      gender: [staff.gender],
      address: [staff.name],
    });
  }

  submit() {
    const staff = this.editStaff.value;
    this.staffService.edit(staff, this.id);
    this.router.navigate(['/list']);
  }

}
