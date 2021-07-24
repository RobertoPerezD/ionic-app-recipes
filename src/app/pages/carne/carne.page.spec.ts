import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CarnePage } from './carne.page';

describe('CarnePage', () => {
  let component: CarnePage;
  let fixture: ComponentFixture<CarnePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarnePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CarnePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
