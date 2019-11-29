import {Component} from '@angular/core';
import {StaffInterface} from './Interface/staff-interface';
import {StaffService} from './services/staff.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private staffService: StaffService) {
  }


}
