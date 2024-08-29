import { Component, Input, OnInit } from '@angular/core';
import { navigationItem } from '../../../../../models/navigation.interface';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-top-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './top-navbar.component.html',
  styleUrl: './top-navbar.component.scss'
})
export class TopNavbarComponent implements OnInit {
  @Input() selectedItem!: navigationItem;

  currentSubItemLink: string = '';

  ngOnInit(): void {
    if (this.selectedItem.subItems.length) {
      this.currentSubItemLink = this.selectedItem.subItems[0].link; // Initialize the first sub-item
    }
  }

  selectSubItem(subItem: { link: string; label: string }): void {
    this.currentSubItemLink = subItem.link;
  }

  handleSubItemKeydown(event: KeyboardEvent, subItem: { link: string; label: string }): void {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      this.selectSubItem(subItem);
    }
  }
}
