import { Component, OnInit } from '@angular/core';
import { NavBarService } from '../nav-bar.service';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {

  constructor(public nav: NavBarService) { }

  ngOnInit() {
  }

  logOut(){
    this.nav.hide();
  }

}

