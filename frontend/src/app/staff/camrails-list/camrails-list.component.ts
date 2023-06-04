import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/interfaces/User';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-camrails-list',
  templateUrl: './camrails-list.component.html',
  styleUrls: ['./camrails-list.component.css']
})
export class CamrailsListComponent {
  camrails : Observable<User[]>
  constructor (
    private userService : UserService
  ){
    this.camrails = this.getCamrails();
  }
  getCamrails(){
    return this.userService.getCamrails();
  }
}
