import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatTabledisplayComponent } from './chat-tabledisplay.component';

describe('ChatTabledisplayComponent', () => {
  let component: ChatTabledisplayComponent;
  let fixture: ComponentFixture<ChatTabledisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatTabledisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatTabledisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
