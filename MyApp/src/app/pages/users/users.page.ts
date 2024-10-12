import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/users.service';
import { User } from '../services/user.model';  

@Component({
  selector: 'app-users',
  templateUrl: './users.page.html',
  styleUrls: ['./users.page.scss'],
})
export class UsersPage implements OnInit {
  users: User[] = [];               
  selectedUser: User | null = null;  

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers() {
    this.userService.getUsers().subscribe((data: User[]) => {
      this.users = data;
    });
  }

  selectUser(user: User) {
    this.selectedUser = user;  
  }
}
