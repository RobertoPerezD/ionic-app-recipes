import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PescadoPage } from './pescado.page';

describe('PescadoPage', () => {
  let component: PescadoPage;
  let fixture: ComponentFixture<PescadoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PescadoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PescadoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
