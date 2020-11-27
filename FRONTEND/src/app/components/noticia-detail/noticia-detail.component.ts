import { Component, Input, OnInit } from '@angular/core';
import { Noticia } from 'src/app/core/models/noticia.model';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-noticia-detail',
  templateUrl: './noticia-detail.component.html',
  styleUrls: ['./noticia-detail.component.sass']
})
export class NoticiaDetailComponent implements OnInit {
  
  @Input()
  noticia: Noticia;
  constructor(private _sanitizer: DomSanitizer) { }

  ngOnInit(): void {
  }

  getVideoIframe(url: string) {
    var video, results;
 
    if (url === null) {
        return '';
    }
    results = url.match('[\\?&]v=([^&#]*)');
    video   = (results === null) ? url : results[1];
 
    return this._sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + video);   
  }

}
