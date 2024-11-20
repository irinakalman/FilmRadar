import { Component, OnInit } from '@angular/core';
import { NowPlayingService } from '../../services/now-playing.service';
import { Movie } from '../../types/movie';
import { GenreService } from '../../services/genre.service';
import { Genre } from '../../types/genre';
import { MovieCardComponent } from "../movie-card/movie-card.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-now-playing',
  standalone: true,
  imports: [MovieCardComponent, CommonModule],
  templateUrl: './now-playing.component.html',
  styleUrl: './now-playing.component.scss'
})
export class NowPlayingComponent implements OnInit {
  movies: Movie[] = [];
  genres: Genre[] = []

  constructor(private playingService: NowPlayingService, private genreService: GenreService) { }



  getPlayingMovies(): void {
    this.playingService.getPlayingNowMovies().subscribe((data: any) => {
      this.movies = data.results;
      console.log(data.results)
    })
  }

  getGenres(): void {
    this.genreService.getGenres().subscribe((data: any) => {
      this.genres = data.genres;
      console.log(this.genres)
    })
  }

  getGenreOfMovie(movie: Movie): string[] {
    return this.genres
    .filter((genre) => movie.genre_ids.includes(genre.id))
    .map((genre) => genre.name)
  }

  ngOnInit(): void {
    this.getPlayingMovies();
    this.getGenres()
  }
}

