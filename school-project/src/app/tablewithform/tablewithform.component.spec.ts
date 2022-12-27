import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablewithformComponent } from './tablewithform.component';

describe('TablewithformComponent', () => {
  let component: TablewithformComponent;
  let fixture: ComponentFixture<TablewithformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablewithformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablewithformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
