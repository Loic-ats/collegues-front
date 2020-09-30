import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageGraphiqueComponent } from './page-graphique.component';

describe('PageGraphiqueComponent', () => {
  let component: PageGraphiqueComponent;
  let fixture: ComponentFixture<PageGraphiqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageGraphiqueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageGraphiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
