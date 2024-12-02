import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-forumpage',
  imports:[CommonModule],
  templateUrl: './forumpage.component.html',
  styleUrls: ['./forumpage.component.css']
})
export class ForumpageComponent {
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
