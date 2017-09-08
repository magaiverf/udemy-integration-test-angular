import { VoterComponent } from './voter.component';
import { TestBed, ComponentFixture } from "@angular/core/testing";
import { By } from "@angular/platform-browser";

describe('VoterComponent', () => {

  let component: VoterComponent;
  let fixture: ComponentFixture<VoterComponent>;

  beforeEach(() => {
    // configure all modules that will be used in this test,
    // it is lke the ngModule file.
    TestBed.configureTestingModule({
      declarations: [VoterComponent]
    });

    // it has dom element from component.
    fixture = TestBed.createComponent(VoterComponent);
    // instace from the component.
    component = fixture.componentInstance;    
  });

  it('should render total votes', () => {
    component.othersVote = 20;
    component.myVote = 1;
    fixture.detectChanges();
    
    // get elemenet by class.
    let de = fixture.debugElement.query(By.css('.vote-count'));
    // create an Html element because the native element is of type any.
    let el: HTMLElement = de.nativeElement;

    expect(el.innerText).toContain('21');
  });

  it('should highlight the upvote button if I have voted.', () => {
    component.myVote = 1;
    fixture.detectChanges();

    let de = fixture.debugElement.query(By.css('.glyphicon-menu-up'));

    expect(de.classes['highlighted']).toBeTruthy();
  });
  
  it('should increase total votes when I click on vote buttons.', () => {
    let button = fixture.debugElement.query(By.css('.glyphicon-menu-up'));

    button.triggerEventHandler('click', null);

    expect(component.totalVotes).toBe(1);
  });
});
