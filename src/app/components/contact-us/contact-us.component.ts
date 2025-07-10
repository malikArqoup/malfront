import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ClinicService } from '../../services/clinic.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [MatIconModule, MatFormFieldModule, MatInputModule, MatButtonModule, FormsModule, CommonModule],
  template: `
    <section class="contact-section" id="contact">
      <div class="contact-container">
        <div class="section-header">
          <div class="header-icon">
            <mat-icon>contact_mail</mat-icon>
          </div>
          <h2 class="section-title">تواصل معنا</h2>
          <p class="section-subtitle">نحن هنا للإجابة على استفساراتكم وتقديم المساعدة</p>
        </div>
        
      <div class="contact-content">
          <div class="contact-form-container">
            <h3 class="form-title">أرسل لنا رسالة</h3>
        <form class="contact-form" (ngSubmit)="onSubmit()">
              <mat-form-field appearance="fill" class="form-field">
                <mat-label>موضوع الرسالة</mat-label>
                <input matInput [(ngModel)]="subject" name="subject" placeholder="أدخل موضوع الرسالة" required>
                <mat-icon matSuffix>subject</mat-icon>
          </mat-form-field>
              
              <mat-form-field appearance="fill" class="form-field">
            <mat-label>رسالتك</mat-label>
                <textarea matInput rows="4" required [(ngModel)]="message" name="message" placeholder="اكتب رسالتك هنا..."></textarea>
                <mat-icon matSuffix>message</mat-icon>
          </mat-form-field>
              
              <button mat-raised-button color="primary" type="submit" class="submit-btn" [disabled]="!isLoggedIn">
                <mat-icon>send</mat-icon>
                إرسال الرسالة
              </button>
              <div *ngIf="!isLoggedIn" style="color: #ef4444; margin-top: 10px;">يجب تسجيل الدخول لإرسال رسالة.</div>
        </form>
          </div>
          
          <div class="contact-info-container">
            <h3 class="info-title">معلومات الاتصال</h3>
            
            <div class="info-items">
              <div class="info-item" *ngFor="let item of contactInfo">
                <div class="info-icon">
                  <mat-icon>{{ item.icon }}</mat-icon>
                </div>
                <div class="info-content">
                  <h4>{{ item.label }}</h4>
                  <p>{{ item.value }}</p>
                </div>
              </div>
            </div>
            
            <div class="working-hours">
              <h4>أوقات العمل</h4>
              <div class="hours-list">
                <div class="hour-item" *ngFor="let hour of workingHours">
                  <span class="day">{{ hour.day }}</span>
                  <span class="time">{{ hour.time }}</span>
                </div>
              </div>
            </div>
            
            <div class="social-links">
              <h4>تابعنا على</h4>
              <div class="social-icons">
                <a href="#" class="social-icon facebook">
                  <mat-icon>facebook</mat-icon>
                </a>
                <a href="#" class="social-icon twitter">
                  <mat-icon>twitter</mat-icon>
                </a>
                <a href="#" class="social-icon instagram">
                  <mat-icon>camera_alt</mat-icon>
                </a>
                <a href="#" class="social-icon whatsapp">
                  <mat-icon>whatsapp</mat-icon>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: `
    .contact-section {
      background: white;
      border-radius: 20px;
      padding: 48px 16px;
      margin: 48px 0;
      box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
    }
    
    .contact-container {
      max-width: 1200px;
      margin: 0 auto;
    }
    
    .section-header {
      text-align: center;
      margin-bottom: 48px;
    }
    
    .header-icon {
      width: 80px;
      height: 80px;
      background: linear-gradient(135deg, #3f51b5 0%, #5c6bc0 100%);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto 24px auto;
      box-shadow: 0 8px 24px rgba(63, 81, 181, 0.3);
    }
    
    .header-icon mat-icon {
      font-size: 40px;
      color: white;
    }
    
    .section-title {
      font-size: 2.5rem;
      font-weight: 700;
      margin-bottom: 16px;
      background: linear-gradient(135deg, #3f51b5 0%, #5c6bc0 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
    
    .section-subtitle {
      font-size: 1.2rem;
      color: #64748b;
      max-width: 500px;
      margin: 0 auto;
      line-height: 1.6;
    }
    
    .contact-content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 48px;
      align-items: start;
    }
    
    .contact-form-container {
      background: #fff;
      padding: 40px 36px 36px 36px;
      border-radius: 22px;
      border: 1px solid #e0e7ef;
      box-shadow: 0 6px 32px rgba(63, 81, 181, 0.09);
      transition: box-shadow 0.3s;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .contact-form-container:hover {
      box-shadow: 0 8px 32px rgba(63, 81, 181, 0.13);
    }
    .form-title {
      font-size: 1.7rem;
      font-weight: 800;
      margin-bottom: 32px;
      color: #25396f;
      text-align: center;
      letter-spacing: 0.7px;
    }
    .contact-form {
      display: flex;
      flex-direction: column;
      gap: 28px;
      width: 100%;
      max-width: 480px;
      margin: 0 auto;
    }
    .form-field {
      width: 100%;
    }
    .form-field ::ng-deep .mat-mdc-form-field,
    .form-field ::ng-deep .mat-mdc-form-field.mat-focused,
    .form-field ::ng-deep .mat-mdc-form-field-outline,
    .form-field ::ng-deep .mat-mdc-form-field-outline-thick,
    .form-field ::ng-deep .mat-mdc-form-field-outline-start,
    .form-field ::ng-deep .mat-mdc-form-field-outline-end {
      border: none !important;
      stroke: none !important;
      box-shadow: none !important;
      background: transparent !important;
    }
    .form-field ::ng-deep .mat-mdc-text-field-wrapper {
      border-radius: 16px;
      background: linear-gradient(135deg, #fafdff 60%, #e9f0fb 100%) !important;
      box-shadow: 0 1.5px 8px rgba(120, 139, 250, 0.06);
      border: none !important;
      transition: box-shadow 0.2s, background 0.2s;
      min-height: 56px;
    }
    .form-field ::ng-deep .mat-mdc-form-field.mat-focused .mat-mdc-text-field-wrapper {
      box-shadow: 0 0 0 6px #a78bfa33, 0 4px 24px #a78bfa22;
      background: #f0f4ff !important;
      transition: box-shadow 0.3s cubic-bezier(.4,1.3,.6,1), background 0.2s;
    }
    .form-field input[matInput],
    .form-field textarea[matInput] {
      font-size: 1.13rem;
      color: #25396f;
      border-radius: 12px;
      background: transparent;
      padding: 14px 14px 14px 40px;
      min-height: 44px;
      border: none;
      outline: none;
      box-shadow: none;
      font-family: 'Cairo', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }
    .form-field textarea[matInput] {
      min-height: 100px;
      resize: vertical;
    }
    .form-field mat-icon {
      color: #7f9cf5;
      font-size: 26px;
      margin-right: 6px;
      margin-top: 2px;
    }
    .submit-btn {
      font-size: 1.22rem;
      font-weight: 800;
      padding: 16px 0;
      border-radius: 32px;
      margin-top: 10px;
      background: linear-gradient(90deg, #7f9cf5 0%, #a78bfa 100%);
      color: #fff;
      box-shadow: 0 4px 18px rgba(127,156,245,0.13);
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 12px;
      letter-spacing: 0.7px;
      transition: background 0.2s, transform 0.2s, box-shadow 0.2s;
      width: 100%;
      max-width: 320px;
      margin-left: auto;
      margin-right: auto;
      animation: btnPopIn 0.8s cubic-bezier(.4,1.3,.6,1);
    }
    .submit-btn mat-icon {
      font-size: 28px;
      margin-left: 8px;
    }
    .submit-btn:disabled {
      background: #e0e7ff;
      color: #b4b4b4;
      box-shadow: none;
    }
    .submit-btn:hover:not(:disabled) {
      background: linear-gradient(90deg, #6c8cf5 0%, #8b7ffa 100%);
      transform: scale(1.04);
      box-shadow: 0 6px 24px rgba(127,156,245,0.18);
      animation: btnPulse 0.7s cubic-bezier(.4,1.3,.6,1) infinite alternate;
    }
    
    .contact-info-container {
      display: flex;
      flex-direction: column;
      gap: 32px;
    }
    
    .info-title {
      font-size: 1.5rem;
      font-weight: 600;
      margin-bottom: 24px;
      color: #1e293b;
    }
    
    .info-items {
      display: flex;
      flex-direction: column;
      gap: 20px;
    }
    
    .info-item {
      display: flex;
      align-items: center;
      gap: 16px;
      padding: 20px;
      background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
      border-radius: 12px;
      border: 1px solid #e2e8f0;
      transition: all 0.3s ease;
    }
    
    .info-item:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
    }
    
    .info-icon {
      width: 48px;
      height: 48px;
      background: linear-gradient(135deg, #3f51b5 0%, #5c6bc0 100%);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      box-shadow: 0 4px 12px rgba(63, 81, 181, 0.3);
    }
    
    .info-icon mat-icon {
      font-size: 24px;
      color: white;
    }
    
    .info-content h4 {
      font-size: 1.1rem;
      font-weight: 600;
      margin-bottom: 4px;
      color: #1e293b;
    }
    
    .info-content p {
      font-size: 1rem;
      color: #64748b;
      margin: 0;
    }
    
    .working-hours {
      background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
      padding: 24px;
      border-radius: 12px;
      border: 1px solid #e2e8f0;
    }
    
    .working-hours h4 {
      font-size: 1.2rem;
      font-weight: 600;
      margin-bottom: 16px;
      color: #1e293b;
    }
    
    .hours-list {
      display: flex;
      flex-direction: column;
      gap: 12px;
    }
    
    .hour-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 8px 0;
      border-bottom: 1px solid #e2e8f0;
    }
    
    .hour-item:last-child {
      border-bottom: none;
    }
    
    .day {
      font-weight: 600;
      color: #1e293b;
    }
    
    .time {
      color: #64748b;
    }
    
    .social-links {
      background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
      padding: 24px;
      border-radius: 12px;
      border: 1px solid #e2e8f0;
    }
    
    .social-links h4 {
      font-size: 1.2rem;
      font-weight: 600;
      margin-bottom: 16px;
      color: #1e293b;
    }
    
    .social-icons {
      display: flex;
      gap: 12px;
    }
    
    .social-icon {
      width: 48px;
      height: 48px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      text-decoration: none;
      transition: all 0.3s ease;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    }
    
    .social-icon:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 16px rgba(0, 0, 0, 0.3);
    }
    
    .social-icon.facebook {
      background: linear-gradient(135deg, #1877f2 0%, #4267b2 100%);
    }
    
    .social-icon.twitter {
      background: linear-gradient(135deg, #1da1f2 0%, #0d8bd9 100%);
    }
    
    .social-icon.instagram {
      background: linear-gradient(135deg, #e4405f 0%, #c13584 100%);
    }
    
    .social-icon.whatsapp {
      background: linear-gradient(135deg, #25d366 0%, #128c7e 100%);
    }
    
    @media (max-width: 768px) {
      .contact-section {
        padding: 32px 16px;
        margin: 32px 0;
    }
      
      .section-title {
        font-size: 2rem;
      }
      
      .contact-content {
        grid-template-columns: 1fr;
        gap: 32px;
      }
      
      .contact-form-container {
        padding: 24px;
      }
      
      .info-item {
        padding: 16px;
      }
      
      .info-icon {
        width: 40px;
        height: 40px;
      }
      
      .info-icon mat-icon {
        font-size: 20px;
      }
      
      .social-icons {
        justify-content: center;
      }
    }
    
    /* أنيميشن ظهور الحقول */
    .contact-form .form-field {
      opacity: 0;
      transform: translateY(24px);
      animation: fadeSlideIn 0.9s cubic-bezier(.4,1.3,.6,1) forwards;
    }
    .contact-form .form-field:nth-child(1) { animation-delay: 0.1s; }
    .contact-form .form-field:nth-child(2) { animation-delay: 0.25s; }
    @keyframes fadeSlideIn {
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    /* زر الإرسال ينبض عند المرور */
    @keyframes btnPulse {
      0% { box-shadow: 0 4px 18px #a78bfa33, 0 0 0 0 #a78bfa33; }
      100% { box-shadow: 0 8px 32px #a78bfa55, 0 0 0 8px #a78bfa22; }
    }
  `
})
export class ContactUsComponent {
  subject = '';
  message = '';
  isLoggedIn = false;
  user: any = null;
  contactInfo: any[] = [];
  workingHours = [
    { day: 'الأحد - الخميس', time: '9:00 ص - 5:00 م' },
    { day: 'الجمعة', time: '10:00 ص - 2:00 م' },
    { day: 'السبت', time: 'مغلق' }
  ];

  constructor(private clinicService: ClinicService, private authService: AuthService) {
    this.user = this.authService.getCurrentUser();
    this.isLoggedIn = !!this.user;
    // جلب معلومات العيادة من الباكند
    this.clinicService.getClinicInfo().subscribe({
      next: (info: any) => {
        this.contactInfo = [
          { icon: 'location_on', label: 'العنوان', value: info.address },
          { icon: 'phone', label: 'الهاتف', value: info.phone },
          { icon: 'email', label: 'البريد الإلكتروني', value: info.email }
        ];
      },
      error: () => {
        this.contactInfo = [];
      }
    });
  }

  onSubmit() {
    if (!this.isLoggedIn) return;
    const data = {
      name: this.user?.name,
      email: this.user?.email,
      phone: this.user?.phone_number,
      subject: this.subject,
      message: this.message
    };
    this.clinicService.sendContactMessage(data).subscribe({
      next: () => {
        alert('تم إرسال رسالتك بنجاح! سنتواصل معك قريباً.');
        this.subject = '';
        this.message = '';
      },
      error: () => {
        alert('حدث خطأ أثناء إرسال الرسالة. حاول مرة أخرى.');
      }
    });
  }
}
