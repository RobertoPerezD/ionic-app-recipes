import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PostrePage } from './postre.page';

describe('PostrePage', () => {
  let component: PostrePage;
  let fixture: ComponentFixture<PostrePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostrePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PostrePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
