import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Banner } from '../models/banner';
import { BannerComponent } from '../banner/banner.component';

@Component({
  selector: 'app-forumpage',
  imports: [BannerComponent, CommonModule],
  templateUrl: './forumpage.component.html',
  styleUrls: ['./forumpage.component.css']
})

export class ForumpageComponent implements OnInit{
   myBanner! : Banner;

  ngOnInit(): void {
    this.myBanner = new Banner(
      "Rejoignez notre communauté pour échanger autour de la capoeira : techniques, culture, événements, et bien plus encore",
    );
  }
  
  data = {
    first: {
      theme: "Techniques",
      message: [
        {
          user: 'utilisateur 1',
          title: 'Comment débuter',
          text: 'Vous avez des conseils quand on débute dans la capoeira'
        },
        {
          user: 'utilisateur 2',
          title: 'Comment débuter',
          text: 'Vous avez des conseils quand on débute dans la capoeira'
        },
        {
          user: 'utilisateur 3',
          title: 'Comment débuter',
          text: 'Vous avez des conseils quand on débute dans la capoeira'
        }
      ]
    },
    second: {
      theme: "Vrille",
      message: [
        {
          user: 'utilisateur 1',
          title: 'Comment débuter',
          text: 'Vous avez des conseils quand on débute dans la capoeira'
        },
        {
          user: 'utilisateur 2',
          title: 'Comment débuter',
          text: 'Vous avez des conseils quand on débute dans la capoeira'
        },
        {
          user: 'utilisateur 3',
          title: 'Comment débuter',
          text: 'Vous avez des conseils quand on débute dans la capoeira'
        }
      ]
    },
    third: {
      theme: "Comment débuter",
      message: [
        {
          user: 'utilisateur 1',
          title: 'Comment débuter',
          text: 'Vous avez des conseils quand on débute dans la capoeira'
        },
        {
          user: 'utilisateur 2',
          title: 'Comment débuter',
          text: 'Vous avez des conseils quand on débute dans la capoeira'
        },
        {
          user: 'utilisateur 3',
          title: 'Comment débuter',
          text: 'Vous avez des conseils quand on débute dans la capoeira'
        }
      ]
    }
  };

  // Transformation en tableau pour faciliter l'itération
  dataArray = Object.values(this.data);
}


