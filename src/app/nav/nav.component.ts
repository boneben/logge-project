import { Component, OnInit } from '@angular/core';
import { element } from 'protractor';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor() { }

  scrollToFooter() {
    window.scrollTo({
      top: window.outerWidth,
      behavior: "smooth"
    })
  }


  ngOnInit() {
  }

}
