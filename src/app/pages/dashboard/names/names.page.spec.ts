import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NamesPageComponent } from './names.page';

describe('NamesPageComponent', () => {
  let component: NamesPageComponent;
  let fixture: ComponentFixture<NamesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NamesPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NamesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
