import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyChildComponentComponent } from './my-child-component.component';

describe('MyChildComponentComponent', () => {
  let component: MyChildComponentComponent;
  let fixture: ComponentFixture<MyChildComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyChildComponentComponent]
    });
    fixture = TestBed.createComponent(MyChildComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
