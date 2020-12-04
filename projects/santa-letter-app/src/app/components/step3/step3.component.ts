import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ControlContainer, FormArray, FormBuilder, Validators } from '@angular/forms';
import { GiftWish } from '../../interfaces/letter-request.interface';

@Component({
  selector: 'santa-step3',
  templateUrl: './step3.component.html',
  styleUrls: ['./step3.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Step3Component implements OnInit {
  constructor(public readonly controlContainer: ControlContainer, private fb: FormBuilder) {}

  ngOnInit(): void {}

  public addWish = () => {
    const array = this.controlContainer?.control?.get('giftWishes') as FormArray;
    array.push(this.createGiftWishFormGroup());
  };
  public removeWish = (index: number) => {
    const array = this.controlContainer?.control?.get('giftWishes') as FormArray;
    array.removeAt(index);
  };

  private createGiftWishFormGroup = (data?: GiftWish) => {
    const config = {
      giftName: [data?.giftName, [Validators.required]],
      giftUrl: [data?.giftUrl, [Validators.required]]
    };

    return this.fb.group(config);
  };
}
