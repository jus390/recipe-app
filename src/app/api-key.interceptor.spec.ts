import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { RecipeService } from './recipe.service';
import { ApiKeyInterceptor } from './api-key.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { of } from 'rxjs';

describe('ApiKeyInterceptor', () => {
  let service: RecipeService;
  let spy: jasmine.Spy;
  let httpMock: HttpTestingController;

  let recipeServiceStub: any;
  beforeEach(() => {



    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        ApiKeyInterceptor,
        RecipeService,
        {
          provide: HTTP_INTERCEPTORS,
          useClass: ApiKeyInterceptor,
          multi: true,
        },
      ]
    })
    service = TestBed.get(RecipeService)
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    const interceptor: ApiKeyInterceptor = TestBed.inject(ApiKeyInterceptor);
    expect(interceptor).toBeTruthy();
  });

  it("should add apiKey parameter", () => {
    let recipeId = 6;
    service.getRecipe(recipeId).subscribe(response => {
      expect(response).toBeTruthy();
    });
    const httpRequest = httpMock.match({ method: "get" })[0];

    expect(httpRequest.request.params.has('apiKey')).toEqual(true);
  })

});
