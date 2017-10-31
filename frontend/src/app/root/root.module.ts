import {NgModule} from '@angular/core';
import {TranslateCompiler, TranslateLoader, TranslateModule, TranslatePipe} from '@ngx-translate/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {HomeComponent} from './home/home.component';
import {FooterModule} from '../footer/footer.module';
import {SharedModule} from '../shared/shared.module';
import {RouterModule, Routes} from '@angular/router';
import {RootComponent} from './root/root.component';
import {HeaderModule} from '../header/header.module';
import {FooterBarService} from '../service/footer-bar.service';
import {LanguageSwitcherComponent} from './language-switcher/language-switcher.component';
import {ActiveQuestionGroupService} from '../service/active-question-group.service';
import {ModalsModule} from '../modals/modals.module';
import {WebsocketService} from '../service/websocket.service';
import {ThemeSwitcherComponent} from './theme-switcher/theme-switcher.component';
import {ThemesModule} from '../themes/themes.module';
import {ConnectionService} from '../service/connection.service';
import {CurrentQuizService} from '../service/current-quiz.service';
import {NicknameChooserModule} from './nickname-chooser/nickname-chooser.module';
import {TranslateMessageFormatCompiler} from 'ngx-translate-messageformat-compiler';
import {I18nService} from '../service/i18n.service';
import {NgxQRCodeModule} from '@techiediaries/ngx-qrcode';
import {QrCodeService} from '../service/qr-code.service';
import {SoundService} from '../service/sound.service';
import {BrowserModule} from '@angular/platform-browser';
import {CommonModule} from '@angular/common';
import {HttpClient} from '@angular/common/http';
import {createTranslateLoader} from '../../lib/translation.factory';
import {CasService} from '../service/cas.service';
import {UserService} from '../service/user.service';
import {QuizModule} from '../quiz/quiz.module';
import {FileUploadService} from '../service/file-upload.service';
import {SettingsService} from '../service/settings.service';

const appRoutes: Routes = [
  {
    path: 'themes',
    component: ThemeSwitcherComponent,
  },
  {
    path: 'preview/:themeId/:languageId',
    component: HomeComponent,
  },
  {
    path: 'info',
    loadChildren: 'app/root/info/info.module#InfoModule'
  },
  {
    path: 'quiz',
    loadChildren: 'app/quiz/quiz.module#QuizModule'
  },
  {
    path: 'languages',
    component: LanguageSwitcherComponent,
  },
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
  },
  /*
   { path: '',
   redirectTo: '/home',
   pathMatch: 'full'
   },
   */
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    HomeComponent,
    RootComponent,
    LanguageSwitcherComponent,
    ThemeSwitcherComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: false} // <-- debugging purposes only
    ),
    SharedModule,
    ThemesModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      },
      compiler: {
        provide: TranslateCompiler,
        useClass: TranslateMessageFormatCompiler
      }
    }),
    HeaderModule,
    FooterModule,
    QuizModule,
    NicknameChooserModule,
    ModalsModule,
    NgbModule.forRoot(),
    NgxQRCodeModule
  ],
  providers: [
    FooterBarService,
    ActiveQuestionGroupService,
    ConnectionService,
    WebsocketService,
    CurrentQuizService,
    I18nService,
    QrCodeService,
    SoundService,
    TranslateModule,
    UserService,
    CasService,
    FileUploadService,
    SettingsService
  ],
  exports: [TranslatePipe, TranslateModule],
  entryComponents: [],
  bootstrap: [RootComponent]
})
export class RootModule {
}
