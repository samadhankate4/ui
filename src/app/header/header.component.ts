import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { User } from '../user.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit,OnDestroy {

  collapsed=true;
  isAuthenticated=false;
  private userSubscription:Subscription;
 constructor(private authService:AuthService){}
  ngOnInit(): void {
    this.userSubscription=this.authService.subject.subscribe(user=>{
     this.isAuthenticated= !!user;
     console.log(user)
     console.log(!user)
     console.log(!user)
    })
  }
  ngOnDestroy(): void {
    this.userSubscription.unsubscribe()
  }
}
