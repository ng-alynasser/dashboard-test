import { Component, OnInit, OnDestroy, Output, ChangeDetectorRef } from "@angular/core";
import { Subscription } from 'rxjs';
import { AuthNoticeService, AuthNotice } from '../../services/auth-notice.service';

@Component({
  selector: 'app-auth-notice',
  templateUrl: './auth-notice.component.html',
})
export class AuthNoticeComponent implements OnInit, OnDestroy {
  @Output() type: any;
  @Output() message = '';

  private subscription: Subscription[] = [];

  constructor(
    public authNoticeService: AuthNoticeService,
    private cdr: ChangeDetectorRef,
  ) { }

  ngOnInit(): void {
    this.subscription.push(
      this.authNoticeService.onNoticeChanged$.subscribe(
        (notice: AuthNotice) => {
          notice = Object.assign({}, { messsage: '', type: '' }, notice);
          this.message = notice.message;
          this.type = notice.type;
          this.cdr.markForCheck();
        }
      )
    );
  }

  ngOnDestroy(): void {
    this.subscription.forEach(sb => sb.unsubscribe());
  }
}