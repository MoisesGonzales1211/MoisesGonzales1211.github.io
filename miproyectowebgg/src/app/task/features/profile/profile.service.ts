import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private profile = new BehaviorSubject<any>({
    name: '',
    career: '',
    year: '',
    profilePicture: '',
    isPublic: true
  });

  getProfile(): Observable<any> {
    return this.profile.asObservable();
  }

  updateProfile(data: any): void {
    this.profile.next({ ...this.profile.value, ...data });
  }

  togglePrivacy(): void {
    const currentProfile = this.profile.value;
    this.profile.next({ ...currentProfile, isPublic: !currentProfile.isPublic });
  }
}