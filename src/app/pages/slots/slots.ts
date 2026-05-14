import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SlotsCard } from "./slots-card/slots-card";
import { SlotsButtons } from './slots-buttons/slots-buttons';

@Component({
  selector: 'app-slots',
  imports: [SlotsCard, SlotsButtons],
  templateUrl: './slots.html',
  styleUrl: './slots.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Slots { }
