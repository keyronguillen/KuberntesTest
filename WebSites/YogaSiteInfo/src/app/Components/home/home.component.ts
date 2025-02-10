import { Component, OnInit, HostListener, ElementRef } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import { RouterLink } from '@angular/router';
import * as Aos  from 'aos';
import { trigger, state, style, animate, transition } from '@angular/animations';

const style1 = style({
  opacity: 1,
  transform: "translateX(0)"
})

const style2 = style({
  opacity: 0,
  transform: "translateX(-100%)"
})


@Component({
  selector: 'app-home',
  imports: [MatToolbarModule, MatCardModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  animations: [
    trigger('menu', [
      state('show', style1),
      state('hide', style2),
      transition('show => hide', animate('700ms ease-out')),
      transition('hide => show', animate('700ms ease-in'))
    ]),
    trigger('calendar', [
      state('show', style1),
      state('hide', style2),
      transition('show => hide', animate('1000ms ease-out')),
      transition('hide => show', animate('1000ms ease-in'))
    ])
  ]
})
export class HomeComponent implements OnInit{

  state = 'hide'
  
  constructor(public el: ElementRef){}

  @HostListener('window:scroll', ['$event'])
  checkScroll(){
    const componentPosition = this.el.nativeElement.offsetTop
    const scrollPosition = window.pageYOffset
    if(scrollPosition >= componentPosition -250){
      this.state = 'show'
    }else{
      this.state = 'hide'
    }
  }

    ngOnInit(): void {
      Aos.init();
      window.addEventListener('load', Aos.refresh)
    }

}
