import { Component, Input } from '@angular/core';
import { TopNavbarComponent } from '../top-navbar/top-navbar.component';
import { navigationItem } from '../../../../../models/navigation.interface';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [TopNavbarComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  @Input() selectedItem!: navigationItem;
}
