import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ControlContainer } from '@angular/forms';

@Component({
  selector: 'santa-gift-wish-form',
  templateUrl: './gift-wish-form.component.html',
  styleUrls: ['./gift-wish-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GiftWishFormComponent implements OnInit {
  constructor(public readonly controlContainer: ControlContainer) {}

  ngOnInit(): void {}
}
