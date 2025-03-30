import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeagueDetailComponentComponent } from './league-detail-component.component';

describe('LeagueDetailComponentComponent', () => {
  let component: LeagueDetailComponentComponent;
  let fixture: ComponentFixture<LeagueDetailComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeagueDetailComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeagueDetailComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
