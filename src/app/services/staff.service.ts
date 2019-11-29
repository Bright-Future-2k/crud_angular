import {Injectable} from '@angular/core';
import {StaffInterface} from '../Interface/staff-interface';

@Injectable({
  providedIn: 'root'
})
export class StaffService {
  staffs: StaffInterface[] = [{
    name: 'Quyen',
    age: 23,
    gender: 'male',
    address: '22 mai dich'
  }, {
    name: 'Nam',
    age: 23,
    gender: 'female',
    address: '221 le lai'
  }, {
    name: 'Tuan',
    age: 23,
    gender: 'female',
    address: '10 tran phu'
  }];


  constructor() {
  }

  getAll() {
    return this.staffs;
  }

  findById(id) {
    return this.staffs[id];
  }

  create(staff) {
    return this.staffs.push(staff);
  }

  edit(staff: StaffInterface, id: number) {
    this.staffs[id] = staff;
  }

  delete(id) {
    if (confirm('ban chac chan muon xoa?')) {
      return this.staffs.splice(id, 1);
    }
  }

  search(keyword) {
    return this.staffs.filter(staffs => staffs.name.toLocaleLowerCase().indexOf(keyword) !== 1);
  }
}
