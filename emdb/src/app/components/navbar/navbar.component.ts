import { Component, OnInit } from '@angular/core';
import { TmdbService } from 'src/app/tmdb.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  searchTerm: string = '';
  searchResults: any[] = [];

  constructor(private tmdbService: TmdbService) {}

  ngOnInit(): void {}

  onSearch() {
    this.tmdbService.searchAll(this.searchTerm).subscribe((results: any) => {
      this.searchResults = results.slice(0, 5);
      console.log(this.searchResults);
    });
  }
}
