import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { IonicModule } from "@ionic/angular";
import { RouterLink } from "@angular/router";


//import { MenuComponent } from "./menu/menu.component";
import { CardComponent } from "./card/card.component";
import { CardsComponent } from "./cards/cards.component";

@NgModule({
  declarations: [CardComponent,CardsComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    CommonModule, IonicModule, RouterLink
  ],
  exports:[CardComponent,CardsComponent]
})
export class ComponentModule { }


/* @NgModule({
  declarations: [MenuComponent,StatusComponent,ButtonComponent,CoinsComponent,CardListComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  imports:[
      CommonModule,
      IonicModule,
      RouterLink,
  ],
  exports:[MenuComponent,StatusComponent,ButtonComponent,CoinsComponent,CardListComponent]
}) */