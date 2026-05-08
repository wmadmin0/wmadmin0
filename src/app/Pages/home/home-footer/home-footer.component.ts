import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {MatTabLink} from '@angular/material/tabs';

@Component({
  selector: 'app-home-footer',
  standalone: true,
  imports: [MatToolbarModule, MatIconModule, MatButtonModule, MatTabLink],
  templateUrl: './home-footer.component.html',
  styleUrls: ['./home-footer.component.css']
})
export class HomeFooterComponent {

}
