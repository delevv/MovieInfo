import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InTheatresListComponent } from './in-theatres-list.component';

describe('InTheatresListComponent', () => {
  let component: InTheatresListComponent;
  let fixture: ComponentFixture<InTheatresListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InTheatresListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InTheatresListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
