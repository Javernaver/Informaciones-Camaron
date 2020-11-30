import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Noticia } from 'src/app/core/models/noticia.model';


@Component({
  selector: 'app-comentarios-screen',
  templateUrl: './comentarios-screen.component.html',
  styleUrls: ['./comentarios-screen.component.sass']
})
export class ComentariosScreenComponent implements OnInit {

  @Input()
  public noti: Noticia;

  public href;

  public numCom;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.href = this.router.url;
       // console.log(this.router.url);
    console.log(document.URL);
    this.changeCommentsUrl(document.URL);
      // console.log(this.noti.titulo);
    setTimeout(() => {
      this.numCom = document.getElementsByTagName('span');
      console.log(' comentarios = ', this.numCom.item(4).innerText);
    }, 3000);

  }


  changeCommentsUrl(link) {
    // should refresh fb comments plugin for the "newUrl" variable
    document.getElementById('comments').innerHTML = '';
    document.getElementById('comments').innerHTML = '<div style="float: left; padding-left:5px; min-height:500px" class="fb-comments" data-href="' + link + '" data-num-posts="10" data-width="990"></div>';
    // FB.XFBML.parse(document.getElementById('comments'));
    document.getElementById('commentsCount').innerHTML = '';
    document.getElementById('commentsCount').innerHTML = '<div id="numComments" class="fb-comments-count" data-href="' + link + '">0</div>';
  }

}