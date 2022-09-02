import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarimagenComponent } from './mostrarimagen.component';

describe('MostrarimagenComponent', () => {
  let component: MostrarimagenComponent;
  let fixture: ComponentFixture<MostrarimagenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MostrarimagenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MostrarimagenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
