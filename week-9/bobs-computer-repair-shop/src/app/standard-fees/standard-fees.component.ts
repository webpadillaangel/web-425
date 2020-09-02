import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-standard-fees',
  templateUrl: './standard-fees.component.html',
  styleUrls: ['./standard-fees.component.scss'],
})
export class StandardFeesComponent implements OnInit {
  constructor(private auth: AuthService) {}

  get isAuthenticated() {
    return this.auth.isSignedIn;
  }

  ngOnInit(): void {}
}
