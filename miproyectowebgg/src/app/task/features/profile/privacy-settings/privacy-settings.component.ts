import { Component } from '@angular/core';
import { ProfileService } from '../profile.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-privacy-settings',
  templateUrl: './privacy-settings.component.html',
  standalone: true,
  imports: [CommonModule] 
})
export class PrivacySettingsComponent {
  isPublic: boolean = true;

  constructor(private profileService: ProfileService) {
    this.profileService.getProfile().subscribe(profile => {
      this.isPublic = profile.isPublic;
    });
  }

  togglePrivacy(): void {
    this.profileService.togglePrivacy();
  }
}