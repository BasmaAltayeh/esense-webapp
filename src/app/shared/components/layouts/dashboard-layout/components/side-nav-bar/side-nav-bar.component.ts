import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterModule } from '@angular/router'; 
import { CommonModule } from '@angular/common';
import { navigationItem } from '../../../../../models/navigation.interface';

@Component({
  selector: 'app-side-navbar',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './side-nav-bar.component.html',
  styleUrl: './side-nav-bar.component.scss'
})
export class SideNavBarComponent {
  @Input() navigationItems: navigationItem[] = [];
  @Input() selectedItem!: navigationItem;
  @Output() itemSelected = new EventEmitter<navigationItem>();

  selectItem(item: navigationItem): void {
    this.itemSelected.emit(item);
  }

  handleKeydown(event: KeyboardEvent, item: navigationItem): void {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      this.selectItem(item);
    }
  }

}
