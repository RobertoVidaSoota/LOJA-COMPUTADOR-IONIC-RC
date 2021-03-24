import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'carrinho',
    loadChildren: () => import('./pages/carrinho/carrinho.module').then( m => m.CarrinhoPageModule)
  },
  {
    path: 'lista-desejos',
    loadChildren: () => import('./pages/lista-desejos/lista-desejos.module').then( m => m.ListaDesejosPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./auth/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'cadastro',
    loadChildren: () => import('./auth/cadastro/cadastro.module').then( m => m.CadastroPageModule)
  },
  {
    path: 'recuperar-senha',
    loadChildren: () => import('./auth/recuperar-senha/recuperar-senha.module').then( m => m.RecuperarSenhaPageModule)
  },
  {
    path: 'informar-dados',
    loadChildren: () => import('./checkout/informar-dados/informar-dados.module').then( m => m.InformarDadosPageModule)
  },
  {
    path: 'confirmar-pagamento',
    loadChildren: () => import('./checkout/confirmar-pagamento/confirmar-pagamento.module').then( m => m.ConfirmarPagamentoPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
