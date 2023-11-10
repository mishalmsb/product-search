import { NgModule } from '@angular/core';
import { LoadingComponent } from './components/loading/loading.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { TabComponent } from './components/tab/tab.component';
import { CommonModule } from '@angular/common';
import { ErrorMessageComponent } from './components/error-message/error-message.component';
import { CountStockByTypePipe } from './pipes/count-stock-by-type.pipe';

@NgModule({
  declarations: [
    LoadingComponent,
    TabsComponent,
    TabComponent,
    ErrorMessageComponent,
    CountStockByTypePipe,
  ],
  imports: [CommonModule],
  exports: [
    LoadingComponent,
    TabsComponent,
    TabComponent,
    ErrorMessageComponent,
    CountStockByTypePipe,
  ],
  providers: [],
})
export class SharedModule {}
