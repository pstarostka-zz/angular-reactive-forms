import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ControlContainer } from '@angular/forms';

@Component({
  selector: 'santa-step2',
  templateUrl: './step2.component.html',
  styleUrls: ['./step2.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Step2Component implements OnInit {
  constructor(public readonly controlContainer: ControlContainer) {}

  ngOnInit(): void {}
}
