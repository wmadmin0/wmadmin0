import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import {GalleryItem} from '../../../Modelo/GalleryItem';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home-body',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule],
  templateUrl: './home-body.component.html',
  styleUrls: ['./home-body.component.css']
})
export class HomeBodyComponent {
  items: GalleryItem[] = [
    {
      image: 'https://picsum.photos/400/200?2',
      title: 'Título 1',
      description: 'Pequena descrição da publicação.',
      link: 'https://exemplo.com/2'
    },
    {
      image: 'https://picsum.photos/400/200?2',
      title: 'Título 2',
      description: 'Outra descrição breve.',
      link: 'https://exemplo.com/2'
    },
    {
      image: 'https://picsum.photos/400/200?3',
      title: 'Título 3',
      description: 'Mais conteúdo interessante aqui.',
      link: 'https://exemplo.com/3'
    },
    {
      image: 'https://picsum.photos/400/200?3',
      title: 'Título 4',
      description: 'Mais conteúdo interessante aqui.',
      link: 'https://exemplo.com/3'
    },
    {
      image: 'https://picsum.photos/400/200?3',
      title: 'Título 5',
      description: 'Mais conteúdo interessante aqui.',
      link: 'https://exemplo.com/3'
    }
  ];
}
