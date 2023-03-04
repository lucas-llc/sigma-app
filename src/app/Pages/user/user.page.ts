import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';
import { UtilService } from 'src/app/services/util/util.service';

@Component({
  selector: 'app-user',
  templateUrl: 'user.page.html',
  styleUrls: ['user.page.scss']
})
export class UserPage {

  constructor(
    public util: UtilService,
    public us: UserService
  ) {

  }

  showActionSheet(){
  }

}
