import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    document.querySelector('body').setAttribute('themebg-pattern', 'theme1');
  }

}
