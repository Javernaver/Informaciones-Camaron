import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-comentarios-screen',
  templateUrl: './comentarios-screen.component.html',
  styleUrls: ['./comentarios-screen.component.sass']
})
export class ComentariosScreenComponent implements OnInit {

  commentForm: FormGroup
  public href: string = "";
  constructor(private _builder: FormBuilder, private router: Router) 
  { 
    this.commentForm = this._builder.group({
      comment:['',Validators.required]
    })
  }

  enviar(values) {
    console.log(values);
  }


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