import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  showAuthDropdown: boolean = false;

  onShowDropdown() {
    this.showAuthDropdown = !this.showAuthDropdown;
  }
}
