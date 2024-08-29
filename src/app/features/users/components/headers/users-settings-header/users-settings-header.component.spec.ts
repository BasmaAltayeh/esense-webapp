import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersSettingsHeaderComponent } from './users-settings-header.component';

describe('UsersSettingsHeaderComponent', () => {
  let component: UsersSettingsHeaderComponent;
  let fixture: ComponentFixture<UsersSettingsHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsersSettingsHeaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UsersSettingsHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
