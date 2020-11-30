import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder} from '@angular/forms';
import { UserProviderService } from 'src/app/core/providers/user/user-provider.service';
import { MustMatch } from 'src/app/utilities/must-match.validator';
import { User } from '../../core/models/user.model';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-login-register-screen',
  templateUrl: './login-register-screen.component.html',
  styleUrls: ['./login-register-screen.component.sass']
})
export class LoginRegisterScreenComponent implements OnInit {

  public gapiSetup: boolean = false; // marks if the gapi library has been loaded
  public authInstance: gapi.auth2.GoogleAuth;
  public error: string;
  public user1: gapi.auth2.GoogleUser;
  
  public USERID: any;

  loginSend: boolean;
  registerSend: boolean;
  
  usua: User = new User();
 // periodista: boolean;
  
  checkoutFormLogin: FormGroup;
  checkoutFormRegister: FormGroup;


  constructor(private servicioLoginRegister: UserProviderService,
              private authService: AuthService,
              private formBuilder: FormBuilder,
              private router: Router ) {
    this.checkoutFormLogin = this.createFormGroupLogin();
    this.checkoutFormRegister = this.createFormGroupRegister();
   // this.periodista=false;
   // localStorage.removeItem('USERID');
  }

  createFormGroupLogin() {

    return this.formBuilder.group({
      usuario: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
  });
    
   /* return new FormGroup({
      usuario: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    });*/
    
  }

  createFormGroupRegister(){

    return this.formBuilder.group({
      user: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      contra: ['', [Validators.required, Validators.minLength(8)]],
      confcontra: ['', [Validators.required]],
      periodista: ['']
  }, {
      validator: MustMatch('contra', 'confcontra')
  });

  /*return new FormGroup({
      user:  new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      contra: new FormControl('', [Validators.required, Validators.minLength(8)]),
      confcontra: new FormControl('', [Validators.required]),
      
    });
    */
  }

  async ngOnInit() {
    if (await this.checkIfUserAuthenticated()) {
      this.user1 = this.authInstance.currentUser.get();
    }
    
  }

  // LOGIN CON GOOGLE
  async initGoogleAuth(): Promise<void> {
    //  Create a new Promise where the resolve 
    // function is the callback passed to gapi.load
    const pload = new Promise((resolve) => {
      gapi.load('auth2', resolve);
    });

    // When the first promise resolves, it means we have gapi
    // loaded and that we can call gapi.init
    return pload.then(async () => {
      await gapi.auth2
        .init({ client_id: environment.YOUR_GOOGLE_KEY })
        .then(auth => {
          this.gapiSetup = true;
          this.authInstance = auth;
        });
    });
  }

  async authenticate(): Promise<gapi.auth2.GoogleUser> {
    // Initialize gapi if not done yet
    if (!this.gapiSetup) {
      await this.initGoogleAuth();
    }

    // Resolve or reject signin Promise
    return new Promise(async () => {
      await this.authInstance.signIn().then(
        user2 => {
          localStorage.setItem('USERID', user2.getBasicProfile().getEmail());
          this.user1 = user2;
          console.log(this.USERID, this.user1.getBasicProfile().getName());
          this.loginGoogle();
          this.router.navigate(['/inicio']);
        },
        error => this.error = error,
        );
    });

    
  }
  
  async loginGoogle() {

    let usuario: Partial<User> = {
      correo: this.user1.getBasicProfile().getEmail() ,
      contraseña: this.user1.getBasicProfile().getId()
    }
    try {
      this.authService.signInUser(usuario).subscribe(
        res => {
          console.log(res);
          localStorage.setItem('token', res.token);
          // this.router.navigate(['/inicio']);
          this.usuarioLogeado = res.Usuario;
          console.log(this.usuarioLogeado);
          localStorage.setItem('userLogged', this.usuarioLogeado._id);
        },
        err => {
          console.log(err);
          this.registerGoogle();
        }
      );
      //await this.servicioLoginRegister.addUsuario(usuario).toPromise();
      //alert("Se logeo exitosamente!");
    }
    catch(error){
      console.log('fallo :c', error);
    }
  }

  async registerGoogle(){
    
    let usuario: Partial<User> = {
      nick: this.user1.getBasicProfile().getEmail() ,
      correo: this.user1.getBasicProfile().getEmail() ,
      contraseña: this.user1.getBasicProfile().getId() ,
      nombre: this.user1.getBasicProfile().getName(),
      permiso: 1
    }
    
    try {
      this.authService.signUpUser(usuario).subscribe(
        res => {
          console.log(res);
          localStorage.setItem('token', res.token);
         // this.router.navigate(['/inicio']);
        },
        err => {
          console.log(err);
          alert('El Usuario ya esta registrado!');
        }
        );
      //await this.servicioLoginRegister.addUsuario(usuario).toPromise();
     // alert('Se creo el Usuario!');
    }
    catch(error){
      console.log('fallo :c', error);
    }  

  }

  async checkIfUserAuthenticated(): Promise<boolean> {
    // Initialize gapi if not done yet
    if (!this.gapiSetup) {
      await this.initGoogleAuth();
    }
   
    return this.authInstance.isSignedIn.get();
  }

  // FIN LOGIN GOOGLE

  public usuarioLogeado;

  onSubmitLogin(){// para cuando le den al boton iniciar sesion
    this.loginSend= true;
    this.usua.correo= this.usuario.value;
    this.usua.contraseña= this.password.value;

    if (this.checkoutFormLogin.valid) { // si es formulario valido
      // console.log('usuario:', this.usua.correo, 'con:', this.usua.contraseña);

      let usuario: Partial<User> = {
        correo: this.usua.correo ,
        contraseña: this.usua.contraseña
      }
      
      try {
        this.authService.signInUser(usuario).subscribe(
          res => {
            console.log(res);
            localStorage.setItem('token', res.token);
            this.router.navigate(['/inicio']);
            
            this.usuarioLogeado = res.Usuario;
            console.log(this.usuarioLogeado);
            localStorage.setItem('userLogged', this.usuarioLogeado._id);
          },
          err => {
            console.log(err);
            alert('Correo o Contraseña Incorrectos!');
          }
        );
        //await this.servicioLoginRegister.addUsuario(usuario).toPromise();
        //alert("Se logeo exitosamente!");
      }
      catch(error){
        console.log('fallo :c', error);
      } 


    }
  }

  public getUserLogged(){
    return this.usuarioLogeado;
  }

  // para cuando le den al boton registrar
 public async onSubmitRegister(){

    this.registerSend=true;
    if (this.checkoutFormRegister.valid) {

      let usuario: Partial<User> = {
        nick: this.checkoutFormRegister.get('user').value ,
        correo: this.checkoutFormRegister.get('email').value ,
        contraseña: this.checkoutFormRegister.get('contra').value ,
        permiso: this.checkoutFormRegister.get('periodista').value
      }
      
      try {
        this.authService.signUpUser(usuario).subscribe(
          res => {
            console.log(res);
            localStorage.setItem('token', res.token);
            alert('Usuario registrado con exito!');
            this.router.navigate(['/inicio']);
          },
          err => {
            console.log(err);
            alert('El Usuario ya esta registrado!');
          }
          );
        //await this.servicioLoginRegister.addUsuario(usuario).toPromise();
       // alert('Se creo el Usuario!');
      }
      catch(error){
        console.log('fallo :c', error);
      }  
      
    }
    this.usua.nick= this.user.value;
    this.usua.correo = this.email.value;
    this.usua.contraseña = this.contra.value;
    this.usua.permiso=1;
    
    
    if (this.checkoutFormRegister.valid) { // si es formulario valido
      if (!this.periodista.value){
        console.log('periodista falso');
      }
      console.log('user:', this.usua.nick, 'email:', this.usua.correo, 'contra:', this.contra.value, 'contra2:', this.confcontra.value, this.periodista.value);
    }
 
  }


  get usuario() { return this.checkoutFormLogin.get('usuario'); }
  get password() { return this.checkoutFormLogin.get('password'); }

  get user() { return this.checkoutFormRegister.get('user'); }
  get email() { return this.checkoutFormRegister.get('email'); }
  get contra() { return this.checkoutFormRegister.get('contra'); }
  get confcontra() { return this.checkoutFormRegister.get('confcontra'); }
  get periodista() { return this.checkoutFormRegister.get('periodista'); }

}
