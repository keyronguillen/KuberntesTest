import { Component, OnInit } from '@angular/core';
import * as Aos from 'aos'

@Component({
  selector: 'app-contact-us',
  imports: [],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.css'
})
export class ContactUsComponent implements OnInit{



  ngOnInit(): void {
    Aos.init();
    window.addEventListener('load', Aos.refresh)
  }



}
