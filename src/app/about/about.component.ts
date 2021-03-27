import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import 'firebase/firestore';
import { Observable } from 'rxjs';
import { JoyasService } from '../services/joyas.service'

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  joyas$:Observable<any>;

  constructor(
    private joyasService: JoyasService
  ) { }

  ngOnInit() {
    this.joyas$ = this.joyasService.getAllJoyas();
  }

}
