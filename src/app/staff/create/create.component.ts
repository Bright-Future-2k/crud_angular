import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {StaffService} from '../../services/staff.service';
import {StaffInterface} from '../../Interface/staff-interface';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  createStaff: FormGroup;

  constructor(private fb: FormBuilder,
              private staffService: StaffService,
              private router: Router) {
  }

  ngOnInit() {
    this.createStaff = this.fb.group({
      name: ['', Validators.required],
      age: ['', Validators.required],
      gender: ['', Validators.required],
      address: ['', Validators.required]
    });
  }

  submit() {
    const newStaff = this.createStaff.value;
    this.staffService.create(newStaff);
    this.router.navigate(['/list']);
  }
}
