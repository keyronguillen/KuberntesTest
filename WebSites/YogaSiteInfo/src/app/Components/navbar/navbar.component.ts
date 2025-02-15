import { Component, OnInit, HostListener, ElementRef } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [MatButtonModule, MatToolbarModule, MatIconModule, RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})

export class NavbarComponent implements OnInit {

  navbarScroll() {
    window.addEventListener('scroll', function () {
      let navbar = this.document.querySelector('.navbar');
      if (this.window.scrollY > 20) {
        navbar?.classList.add('scrolled')
      } else {
        navbar?.classList.remove('scrolled')
      }
    })
  }


  navbarHide() {
    window.addEventListener('scroll', function () {
      let hidde = this.document.querySelector('.navbar')
      let show = this.document.querySelector('.navbar')
      if (this.window.scrollY > 20) {
        hidde?.classList.add('hidde')
      } else {
        hidde?.classList.remove('hidde')
      }
    })
  }

  menuToggle() {
    const menuBtn = document.getElementById('menu_btn')
    const navLinks = document.getElementById('nav_links')
    const menuIcon = document.querySelector('i')

    menuBtn?.addEventListener('click', (e) => {
      navLinks?.classList.toggle('open')

      const isOpen = navLinks?.classList.contains('open')
      menuIcon?.setAttribute('class', isOpen ? 'ri-close-line' : 'ri-menu-line')
    })
  }

  constructor(public el: ElementRef) { }

  ngOnInit(): void {
    this.menuToggle()
    this.navbarScroll()
    this.navbarHide()
  }

}
