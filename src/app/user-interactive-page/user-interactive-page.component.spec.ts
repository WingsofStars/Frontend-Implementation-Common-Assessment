import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserInteractivePageComponent } from './user-interactive-page.component';

describe('UserInteractivePageComponent', () => {
  let component: UserInteractivePageComponent;
  let fixture: ComponentFixture<UserInteractivePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserInteractivePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserInteractivePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
