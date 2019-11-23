import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DisordersComponent} from './disorders.component';
import {DisordersChainComponent} from './disorders-chain/disorders-chain.component';
import {DisorderDetailComponent} from './disorder-detail/disorder-detail.component';
import { ChainNodeComponent } from './disorders-chain/chain-node/chain-node.component';
import { ChainConnectionComponent } from './disorders-chain/chain-connection/chain-connection.component';
import {DisordersChainModule} from './disorders-chain/disorders-chain.module';


@NgModule({
  declarations: [
    DisordersComponent,
    DisorderDetailComponent
  ],
  exports: [
    DisordersComponent
  ],
  imports: [
    CommonModule,
    DisordersChainModule
  ]
})
export class DisordersModule {
}
