import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
  <h5 class="my-0 mr-md-auto font-weight-normal">Partes de Mano de Obra&emsp;</h5>
  <nav class="my-2 my-md-0 mr-md-3">
    <a class="p-2 text-dark fst-italic" routerLink="/">Home</a>
    <a class="p-2 text-dark fst-italic" routerLink="/empresas">Empresas</a>
  </nav>
</div>
<div class="container">
<router-outlet> </router-outlet>
</div>
  `,
  styles: []
})
export class AppComponent {
  title = 'cli';
}
