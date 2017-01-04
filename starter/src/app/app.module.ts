import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { UsersComponent } from './users.component'
import { UserListComponent } from './user-list.component'
import { HighlightDirective } from "./highlight.directive"
import { MyUnlessDirective } from './myUnless.directive'

@NgModule({
  imports: [BrowserModule],
  declarations: [UsersComponent, UserListComponent, HighlightDirective, MyUnlessDirective],
  bootstrap: [UsersComponent]
})

export class AppModule {}
