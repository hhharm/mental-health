import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DisordersChainComponent} from './disorders-chain.component';
import {ChainConnectionComponent} from './chain-connection/chain-connection.component';
import {ChainNodeComponent} from './chain-node/chain-node.component';


@NgModule({
  declarations: [
    DisordersChainComponent,
    ChainConnectionComponent,
    ChainNodeComponent
  ],
  exports: [DisordersChainComponent],
  imports: [
    CommonModule
  ]
})
export class DisordersChainModule {
}
