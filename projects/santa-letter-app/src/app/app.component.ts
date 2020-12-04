import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Address, GiftWish, LetterRequest } from './interfaces/letter-request.interface';

@Component({
  selector: 'santa-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'santa-letter-app';
  public santa = '../assets/santa-claus.svg';
  public form!: FormGroup;

  constructor(private readonly fb: FormBuilder) {}

  public ngOnInit() {
    this.createFormGroup();
  }

  // AbstractControl -> FormControl -> FormGroup -> FormArray

  private createFormGroup = (data?: LetterRequest) => {
    const config = {
      firstName: [data?.firstName, [Validators.required]],
      lastName: [data?.lastName, [Validators.required]],
      age: [data?.age, [Validators.required]],
      address: this.createAddressFormGroup(data?.address),
      giftWishes: this.createGiftWishesFormArray(data?.giftWishes)
    };
    this.form = this.fb.group(config);
  };

  private createGiftWishesFormArray = (data?: GiftWish[]) =>
    data?.map((wish) => this.createGiftWishFormGroup(wish)) ?? this.fb.array([this.createGiftWishFormGroup()]);

  private createGiftWishFormGroup = (data?: GiftWish) => {
    const config = {
      giftName: [data?.giftName, [Validators.required]],
      giftUrl: [data?.giftUrl, [Validators.required]]
    };

    return this.fb.group(config);
  };

  private createAddressFormGroup = (data?: Address) => {
    const config = {
      addressLineOne: [data?.addressLineOne, [Validators.required]],
      addressLineTwo: [data?.addressLineTwo, []],
      addressLineThree: [data?.addressLineThree, [Validators.required]],
      city: [data?.city, [Validators.required]],
      stateOrProvince: [data?.city, [Validators.required]],
      country: [data?.country, [Validators.required]]
    };
    return this.fb.group(config);
  };

  public sampleData: LetterRequest = {
    age: 8,
    firstName: 'Krzysiu',
    lastName: 'Kowalski',
    address: {
      addressLineOne: 'Typowa 3',
      addressLineTwo: '',
      addressLineThree: '',
      city: 'Bielsko-Biala',
      country: 'Poland',
      stateOrProvince: 'Slaskie'
    },
    giftWishes: [
      {
        giftName: 'PlayStation 5',
        giftUrl: 'https://www.euro.com.pl/konsole-playstation-5.bhtml'
      },
      {
        giftName: 'Rower',
        giftUrl: 'https://allegro.pl/kategoria/rowery-i-akcesoria-rowery-16420?bmatch=dict20120-m-ctx-spo-1-4-1203'
      }
    ]
  };
}
