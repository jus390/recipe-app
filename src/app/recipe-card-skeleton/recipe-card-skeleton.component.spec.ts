import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeCardSkeletonComponent } from './recipe-card-skeleton.component';

describe('RecipeCardSkeletonComponent', () => {
  let component: RecipeCardSkeletonComponent;
  let fixture: ComponentFixture<RecipeCardSkeletonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RecipeCardSkeletonComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeCardSkeletonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


});
