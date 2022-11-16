import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '../interfaces/store';

@Component({
  selector: 'app-form-array-test',
  templateUrl: './form-array-test.component.html',
  styleUrls: ['./form-array-test.component.scss'],
})
export class FormArrayTestComponent implements OnInit {
  form!: FormGroup;

  panelOpenState = false;
  dataStores: Store[] = [];
  storeId!: string;

  listModality: any[] = [
    { id: '3fa85f64-5717-4562-b3fc-2c963f66afAA', name: 'Modalidade 1' },
    { id: 2, name: 'Modalidade 2' },
    { id: '3fa85f64-5717-4562-b3fc-2c963f66afBB', name: 'Modalidade 3' },
  ];

  listSalesChannel: any[] = [
    {
      salesChannelId: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
      salesChannelName: 'lista de canais 1',
      modalityId: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
      modalityName: 'modalidade 1',
    },
    {
      salesChannelId: '3fa85f64-5717-4562-b3fc-2c963f66af33',
      salesChannelName: 'lista de canais 2',
      modalityId: '3fa85f64-5717-4562-b3fc-2c963f66af33',
      modalityName: 'modalidade 2',
    },
  ];

  constructor(private fb: FormBuilder) {}

  get stores() {
    return this.form.get('stores') as FormArray;
  }

  ngOnInit(): void {
    console.log(this.listSalesChannel);

    this.buildForm();
    this.loadValuesForm();
  }

  buildForm(): void {
    this.form = this.fb.group({
      stores: this.fb.array<Store>([]),
    });
  }

  /**
   * Simulando o JSON de retorno da minha api, peguei e mockei o JSON da mesma forma que vem do back-end
   */
  loadValuesForm(): void {
    this.dataStores = [
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
      {
        storeId: '3fa85f64-5717-4562-b3fc-2c963f661111',
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
            storeCode: 'code store 2',
            cashierCode: 'code store 2',
            modality: {
              id: '3fa85f64-5717-4562-b3fc-2c963f66afBB',
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
                salesChannelId: '3fa85f64-5717-4562-b3fc-2c963f66af33',
                salesChannelName: 'string',
              },
            ],
          },
        ],
      },
    ];

    const response = this.dataStores.map(res => {
      return res.storeModalitys.map(item => {
        return {
          storeId: res.storeId,
          storeName: res.storeName,
          storeCode: item.storeCode,
          cashierCode: item.cashierCode,
          modalityId: item.modality.id,
          salesChannelId: item.salesChannel.map(item => item.salesChannelId),
        };
      });
    });

    response.flat().forEach(element => {
      this.stores.push(this.fb.group(element));
    });
  }

  remove(index: number): void {
    this.stores.removeAt(index);
  }

  add(): void {
    this.stores.push(
      this.fb.group({
        storeId: this.storeId, // pegarei o storeId da rota
        modalityId: [null, Validators.required],
        storeCode: [''],
        cashierCode: [''],
        salesChannelId: [null],
      })
    );
  }
}
