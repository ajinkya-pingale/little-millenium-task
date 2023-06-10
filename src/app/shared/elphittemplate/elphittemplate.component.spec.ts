import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElphittemplateComponent } from './elphittemplate.component';

describe('ElphittemplateComponent', () => {
  let component: ElphittemplateComponent;
  let fixture: ComponentFixture<ElphittemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElphittemplateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElphittemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
