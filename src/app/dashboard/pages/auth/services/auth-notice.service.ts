import { Injectable } from "@angular/core";
import { BehaviorSubject } from 'rxjs';

export interface AuthNotice {
  type?: string;
  message: string;
}

@Injectable()
export class AuthNoticeService {
  onNoticeChanged$: BehaviorSubject<AuthNotice>;

  constructor() {
    this.onNoticeChanged$ = new BehaviorSubject(null);
  }

  setNotice(message: string, type?: string) {
    const notice: AuthNotice = {
      message,
      type,
    };

    this.onNoticeChanged$.next(notice);
  }
}