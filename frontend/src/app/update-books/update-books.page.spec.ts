import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UpdateBooksPage } from './update-books.page';

describe('UpdateBooksPage', () => {
  let component: UpdateBooksPage;
  let fixture: ComponentFixture<UpdateBooksPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(UpdateBooksPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
