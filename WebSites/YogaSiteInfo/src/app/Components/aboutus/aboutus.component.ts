import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import * as Aos from 'aos';

@Component({
  selector: 'app-aboutus',
  imports: [MatIconModule],
  templateUrl: './aboutus.component.html',
  styleUrl: './aboutus.component.css'
})

export class AboutusComponent implements OnInit{

  ngOnInit(): void {
    Aos.init();
    window.addEventListener('load', Aos.refresh)
  }

}