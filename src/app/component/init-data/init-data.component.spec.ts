import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InitDataComponent } from './init-data.component';

describe('InitDataComponent', () => {
  let component: InitDataComponent;
  let fixture: ComponentFixture<InitDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InitDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InitDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
