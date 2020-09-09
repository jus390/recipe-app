import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeFavouritesComponent } from './recipe-favourites.component';

describe('RecipeFavouritesComponent', () => {
  let component: RecipeFavouritesComponent;
  let fixture: ComponentFixture<RecipeFavouritesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RecipeFavouritesComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeFavouritesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


});
