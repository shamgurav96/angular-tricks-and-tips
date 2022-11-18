import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '../interfaces/store';

@Component({
  selector: 'app-form-array-test',
  templateUrl: './form-array-test.component.html',
  styleUrls: ['./form-array-test.component.scss'],
})
export class FormArrayTestComponent {
  form: FormGroup;

  panelOpenState = false;
  storeId!: '123123xxx-123123-xxxx';

  listModality: any[] = [
    { id: '3fa85f64-5717-4562-b3fc-2c963f66afAA', name: 'Modalidade 1' },
    { id: 2, name: 'Modalidade 2' },
    { id: '3fa85f64-5717-4562-b3fc-2c963f66afBB', name: 'Modalidade 3' },
  ];

  listSalesChannel: any[] = [
    {
      salesChannelId: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
      salesChannelName: 'canal 1',
      modalityId: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
      modalityName: 'modalidade 1',
    },
    {
      salesChannelId: '3fa85f64-5717-4562-b3fc-2c963f66af33',
      salesChannelName: 'canal 2',
      modalityId: '3fa85f64-5717-4562-b3fc-2c963f66af33',
      modalityName: 'modalidade 2',
    },
  ];

  dataStores: Store[] = [
    {
      storeId: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
      storeName: 'NOME',
      storeType: {
        id: 0,
        name: 'string',
        nickName: 'string',
        active: true,
      },
      brand: {
        id: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
        name: 'string',
        image: 'string',
        active: true,
      },
      storeAddress: {
        id: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
        storeId: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
        street: 'string',
        number: 'string',
        zipCode: 'string',
        additional: 'string',
        neighborhood: 'string',
        city: 'string',
        state: 'string',
        country: 'string',
        latitude: 0,
        longitude: 0,
        urlMaps: 'string',
      },
      contacts: [
        {
          id: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
          name: 'string',
          email: 'string',
          phone: 0,
          contactTypeId: 0,
          contactTypeName: 'string',
        },
      ],
      storeModalitys: [
        {
          storeModalityId: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
          storeCode: 'code store 1',
          cashierCode: 'code store 1',
          modality: {
            id: '3fa85f64-5717-4562-b3fc-2c963f66afAA',
            name: 'string',
            tag: 'string',
            active: true,
            order: 0,
            canBlock: true,
          },
          openingHours: [
            {
              id: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
              storeModalityId: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
              dayWeek: 0,
              initialTime: 'string',
              endTime: 'string',
            },
          ],
          salesChannel: [
            {
              storeModalitySalesChannelId:
                '3fa85f64-5717-4562-b3fc-2c963f66afa6',
              salesChannelId: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
              salesChannelName: 'string',
            },
          ],
        },
      ],
    },
  ];

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      stores: this.formBuilder.array([])
    });

    // this.dataStores.map((item) => item.storeModalitys.forEach(() => {
    //   this.addStoreModalitys();
    // }));

    // this.stores.patchValue(this.dataStores);
  }

  get getMyFormArray(): FormArray {
    return this.form.get('stores') as FormArray;
  }

  add() {
    this.getMyFormArray.push(this.getModalityForGroup());
  }

  getModalityForGroup(): FormGroup {
    return this.formBuilder.group({
      id: this.formBuilder.control(this.getMyFormArray.controls.length + 1),
      storeModality: this.formBuilder.group({
        storeId: this.formBuilder.control('', Validators.compose([Validators.required])),
        modalityId: this.formBuilder.control('', Validators.compose([Validators.required])),
        storeCode: this.formBuilder.control(''),
        cashierCode: this.formBuilder.control('')
      }),
      openingHours: this.formBuilder.array([
        this.formBuilder.group({
          dayWeek: this.formBuilder.control(''),
          initialTime: this.formBuilder.control(''),
          endTime: this.formBuilder.control(''),
        })
      ]),
      salesChannel: this.formBuilder.array([
        this.formBuilder.group({
          salesChannelId: this.formBuilder.control(''),
          token: this.formBuilder.control(''),
        })
      ]),
    })
  }

  remove(index: number): void {
    this.getMyFormArray.removeAt(index);
  }
}
