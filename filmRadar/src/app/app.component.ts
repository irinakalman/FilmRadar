import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NowPlayingComponent } from './components/now-playing/now-playing.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NowPlayingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'filmRadar';
}
