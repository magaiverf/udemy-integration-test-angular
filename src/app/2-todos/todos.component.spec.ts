/* tslint:disable:no-unused-variable */
import { async, fakeAsync, tick, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { HttpModule } from "@angular/http";
import { TodoService } from "./todo.service";
import { TodosComponent } from './todos.component';
import { Observable } from "rxjs";

describe('TodosComponent', () => {
  let component: TodosComponent;
  let fixture: ComponentFixture<TodosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [TodoService],
      declarations: [ TodosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodosComponent);
    component = fixture.componentInstance;
  });

  xit('should load todos from server', () => {
    let service = TestBed.get(TodoService);

    spyOn(service, 'getTodos').and.returnValue(Observable.from([[1, 2, 3]]))
    
    // need to call it here because the service method is in ngOnInit method.
    fixture.detectChanges();

    expect(component.todos.length).toBe(3);
  });

  xit('should load todos from server', async(() => {
    let service = TestBed.get(TodoService);

    spyOn(service, 'getTodosPromise').and.returnValue(Promise.resolve([1, 2, 3]));
    
    // need to call it here because the service method is in ngOnInit method.
    fixture.detectChanges();

    // when all async function to be completed it will be call
    fixture.whenStable().then(() => {
      expect(component.todos.length).toBe(3);      
    });
  }));
  
  it('should load todos from server', fakeAsync(() => {
    let service = TestBed.get(TodoService);

    spyOn(service, 'getTodosPromise').and.returnValue(Promise.resolve([1, 2, 3]));
    
    // need to call it here because the service method is in ngOnInit method.
    fixture.detectChanges();

    // simulate a waiting time in the fakeAsync
    tick();

    expect(component.todos.length).toBe(3);      
  }));
});
