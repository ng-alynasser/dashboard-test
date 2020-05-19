import { Component, ViewEncapsulation, OnInit, ElementRef, Renderer2 } from "@angular/core";
import { LayoutConfigService, TranslationService, SplashScreenService } from 'src/app/core/_base/layout';
import { AuthNoticeService } from './services/auth-notice.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AuthComponent implements OnInit {

  today: number = Date.now();
  headerLogo: string;

  constructor(
    private layoutConfigService: LayoutConfigService,
    public authNoticeService: AuthNoticeService,
    private translationService: TranslationService,
    private splashScreenService: SplashScreenService,
  ) { }

  ngOnInit(): void {
    this.translationService.setLanguage(this.translationService.getSelectedLanguage());
    this.headerLogo = this.layoutConfigService.getLogo();
    this.splashScreenService.hide();
  }
}