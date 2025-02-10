import { Component, OnInit} from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AnimateOnScrollModule } from 'primeng/animateonscroll';

@Component({
  selector: 'app-login',
  imports: [MatToolbarModule, AnimateOnScrollModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent implements OnInit{

  ngOnInit(): void {

  }

}


