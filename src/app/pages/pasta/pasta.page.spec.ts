import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PastaPage } from './pasta.page';

describe('PastaPage', () => {
  let component: PastaPage;
  let fixture: ComponentFixture<PastaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PastaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PastaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
