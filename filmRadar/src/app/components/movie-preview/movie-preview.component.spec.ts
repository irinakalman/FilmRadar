import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviePreviewComponent } from './movie-preview.component';

describe('MoviePreviewComponent', () => {
  let component: MoviePreviewComponent;
  let fixture: ComponentFixture<MoviePreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MoviePreviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoviePreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
