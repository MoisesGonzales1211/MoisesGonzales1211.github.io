import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ProfileService } from './profile.service';
import { CommonModule } from '@angular/common';
import { PrivacySettingsComponent } from './privacy-settings/privacy-settings.component';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  standalone: true, 
  imports: [ReactiveFormsModule, CommonModule, ]
  
})
export default class ProfileComponent implements OnInit {
  profileForm: FormGroup;

  constructor(private fb: FormBuilder, private profileService: ProfileService) {
    this.profileForm = this.fb.group({
      name: [''],
      career: [''],
      year: [''],
      profilePicture: ['']
    });
  }

  ngOnInit(): void {
    this.profileService.getProfile().subscribe(profile => {
      this.profileForm.patchValue(profile);
    });
  }

  saveProfile(): void {
    this.profileService.updateProfile(this.profileForm.value);
  }

  onFileSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.profileForm.get('profilePicture')?.setValue(reader.result);
      };
      reader.readAsDataURL(file);
    }
  }
}