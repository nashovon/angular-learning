import { TestBed } from '@angular/core/testing';

import { TokenAddInterceptor } from './token-add.interceptor';

describe('TokenAddInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      TokenAddInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: TokenAddInterceptor = TestBed.inject(TokenAddInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
