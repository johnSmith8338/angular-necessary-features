import { NgTemplateOutlet } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CodeViewer } from "../../../components/code-viewer/code-viewer";

@Component({
  selector: 'app-stop-repeat-content',
  imports: [NgTemplateOutlet, CodeViewer],
  templateUrl: './stop-repeat-content.html',
  styleUrl: './stop-repeat-content.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StopRepeatContent {
  signUp() {
    alert('Signed up!');
  }

  showNow() {
    alert('Show now!');
  }

  signIn() {
    alert('Signed in!');
  }

  buttonTemplateCode = `
    <ng-template 
      #button 
      let-title="title" 
      let-subtitle="subtitle"
    >
      <span class="title">
        {{title}}
      </span>

      @if (subtitle) {
        <span class="subtitle">
          {{subtitle}}
        </span>
      }

      <svg width="24" height="24">
        ...
      </svg>
    </ng-template>
  `

  signupTemplateCode = `
    <button class="button" 
      (click)="signUp()"
    >
      <ng-container 
        *ngTemplateOutlet="button; 
        context: {
          title:'Sign up',
          subtitle:'And become a champ'
      }"></ng-container>
    </button>
  `

  showTemplateCode = `
    <button class="button" 
      (click)="showNow()"
    >
      <ng-container 
        *ngTemplateOutlet="button; 
        context: {
          title:'Show now'
      }"></ng-container>
    </button>
  `

  signinTemplateCode = `
    <button class="button" 
      (click)="showNow()"
    >
      <ng-container 
        *ngTemplateOutlet="button; 
        context: {
          title:'Show now'
      }"></ng-container>
    </button>
  `
}
