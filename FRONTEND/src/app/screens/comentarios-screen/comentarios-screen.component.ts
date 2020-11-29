import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-comentarios-screen',
  templateUrl: './comentarios-screen.component.html',
  styleUrls: ['./comentarios-screen.component.sass']
})
export class ComentariosScreenComponent implements OnInit {

  public href: string = "";

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.href = this.router.url;
       // console.log(this.router.url);
       console.log(document.URL);
       this.changeCommentsUrl(document.URL);
  }

  changeCommentsUrl(link) {
    // should refresh fb comments plugin for the "newUrl" variable
    document.getElementById('comments').innerHTML = '';
    document.getElementById('comments').innerHTML = '<div style="float: left; padding-left:5px; min-height:500px" class="fb-comments" data-href="' + link + '" data-num-posts="10" data-width="990"></div>';
    //FB.XFBML.parse(document.getElementById('comments'));
  }

}