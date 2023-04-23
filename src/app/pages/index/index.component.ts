import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  items: MenuItem[] = [];

  constructor(){}

  ngOnInit(): void {
    this.items = [
      {
        label: 'Home',
        url: '#'
      },
      {
        label: 'Work with us',
        url: '#'
      },
      {
        label: 'Contact',
        url: '#'
      }
    ];
  }
}