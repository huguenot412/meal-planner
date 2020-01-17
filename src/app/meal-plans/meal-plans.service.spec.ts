import { TestBed } from '@angular/core/testing';

import { MealPlansService } from './meal-plans.service';

describe('MealPlansService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MealPlansService = TestBed.get(MealPlansService);
    expect(service).toBeTruthy();
  });
});
