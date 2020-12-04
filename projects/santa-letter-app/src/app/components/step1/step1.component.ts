import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ControlContainer } from '@angular/forms';

@Component({
  selector: 'santa-step1',
  templateUrl: './step1.component.html',
  styleUrls: ['./step1.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Step1Component implements OnInit {
  constructor(public readonly controlContainer: ControlContainer) {}

  ngOnInit(): void {}
}
