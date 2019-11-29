import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {StaffService} from '../../services/staff.service';
import {StaffInterface} from '../../Interface/staff-interface';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private staffService: StaffService) {
  }

  @Input() staffs: any;
  @Output() staff = new EventEmitter();

  ngOnInit() {
  }
  onSearch(event) {
    const value = event.target.value;
    if (value) {
      this.staffs = this.staffs.filter(staffs => staffs.name.toLocaleLowerCase().includes(value));
    } else {
      this.staffs = null;
    }
    this.staff.emit(this.staffs);
  }
}
