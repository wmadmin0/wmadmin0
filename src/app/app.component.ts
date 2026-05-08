import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeHeaderComponent } from './Pages/home/home-header/home-header.component';
import { HomeBodyComponent } from './Pages/home/home-body/home-body.component';
import { HomeFooterComponent } from './Pages/home/home-footer/home-footer.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    HomeHeaderComponent,
    HomeBodyComponent,
    HomeFooterComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'wmapp';
}
