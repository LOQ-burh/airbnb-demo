import { TestBed } from '@angular/core/testing';

import { CustomDashboardService } from './custom-dashboard.service';

describe('CustomDashboardService', () => {
  let service: CustomDashboardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomDashboardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
