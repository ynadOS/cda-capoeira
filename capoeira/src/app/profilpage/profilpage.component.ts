import { Component, OnInit } from '@angular/core';
import { ProfilServiceService } from '../Services/profil-service.service';
import { User } from '../models/user.model';
import { error } from 'console';

@Component({
  selector: 'app-profilpage',
  imports: [],
  templateUrl: './profilpage.component.html',
  styleUrl: './profilpage.component.css',
  providers: [ProfilServiceService],
})
export class ProfilpageComponent implements OnInit {
  user: User = {} as User;

  ngOnInit(): void {
    this.profilService.getOneUser().subscribe({
      next: (element: User) => {
        this.user = element;
      },
      error: () => {},
    });
  }

  constructor(private profilService: ProfilServiceService) {}
}
