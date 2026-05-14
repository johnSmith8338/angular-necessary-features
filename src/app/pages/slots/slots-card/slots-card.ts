import { ChangeDetectionStrategy, Component, contentChild } from '@angular/core';
import { SlotsButtons } from '../slots-buttons/slots-buttons';
import { NgTemplateOutlet } from "@angular/common";

@Component({
  selector: 'app-slots-card',
  imports: [NgTemplateOutlet],
  templateUrl: './slots-card.html',
  styleUrl: './slots-card.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SlotsCard {
  //** gettin access to header element on page */
  protected header = contentChild<Element>('header');
  protected footer = contentChild(SlotsButtons);
}
