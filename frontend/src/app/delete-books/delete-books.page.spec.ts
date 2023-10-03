import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DeleteBooksPage } from './delete-books.page';

describe('DeleteBooksPage', () => {
  let component: DeleteBooksPage;
  let fixture: ComponentFixture<DeleteBooksPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DeleteBooksPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
