import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthenticationService } from '../services/authenticationService';
import User from '../interfaces/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public user: User;
  private returnUrl: string;

  constructor(private authenticationService: AuthenticationService, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.user = new User();
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }
  cancel() {
    this.router.navigate(['/']);
  }

  login() {
    debugger;
    this.authenticationService.login(this.user.username, this.user.password)
      // .pipe(first())
      .subscribe(
      data => {
        this.router.navigate([this.returnUrl]);
      },
    );

  }

}
