import { Component, OnInit } from '@angular/core';
import { registerService } from './../../shared/services/register.services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  constructor(private registerService:registerService) { }

  ngOnInit() {
    this.registerService.userData().subscribe(data => {
    })
  }

}
