import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NAVIGATION_ITEMS } from '../../../constants/navigation';
import { navigationItem } from '../../../models/navigation.interface';
import { HeaderComponent } from './components/header/header.component';
import { TopNavbarComponent } from './components/top-navbar/top-navbar.component';
import { SideNavBarComponent } from './components/side-nav-bar/side-nav-bar.component';

@Component({
  selector: 'app-dashboard-layout',
  standalone: true,
  imports: [
    RouterModule,
    CommonModule,
    HeaderComponent,
    TopNavbarComponent,
    SideNavBarComponent,
  ],
  templateUrl: './dashboard-layout.component.html',
  styleUrl: './dashboard-layout.component.scss',
})
export class DashboardLayoutComponent {
  navigationItems: navigationItem[] = NAVIGATION_ITEMS;
  selectedItem!: navigationItem;

  constructor() {
    this.selectedItem = this.navigationItems[0];
  }

  onItemSelected(item: navigationItem): void {
    this.selectedItem = item;
  }
}
