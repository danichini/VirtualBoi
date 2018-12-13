import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VirtualChatComponent } from './virtual-chat.component';

describe('VirtualChatComponent', () => {
  let component: VirtualChatComponent;
  let fixture: ComponentFixture<VirtualChatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VirtualChatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VirtualChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
