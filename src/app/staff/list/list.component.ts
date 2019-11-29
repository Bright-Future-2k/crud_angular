import {Component, OnInit} from '@angular/core';
import {StaffService} from '../../services/staff.service';
import {StaffInterface} from '../../Interface/staff-interface';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private staffService: StaffService) {
  }
  staffs = this.staffService.getAll();

  ngOnInit() {
    this.staffs = this.staffService.getAll();
  }

  delete(id) {
    return this.staffService.delete(id);
  }

  staffSearch(event) {
    if (event) {
      this.staffs = event;
    } else {
      this.staffs = this.staffService.getAll();
    }
  }
}
