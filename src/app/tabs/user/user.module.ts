import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserPageRoutingModule } from './user-routing.module';

import { UserPage } from './user.page';
import { UserDetailPage } from 'src/app/tabs/user/user-detail/user-detail.page';
import { SharedmoduleModule } from 'src/app/sharedmodule/sharedmodule.module';
import { IntegerInputDirectiveModule } from 'src/app/common/directives/integer-input/integer-input-directive.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HttpClientModule,
    UserPageRoutingModule,
    IntegerInputDirectiveModule,
    ReactiveFormsModule,
    SharedmoduleModule
  ],
  declarations: [UserPage, UserDetailPage]
})
export class UserPageModule {}
