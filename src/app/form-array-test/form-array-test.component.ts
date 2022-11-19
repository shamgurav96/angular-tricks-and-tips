import { ModalTokenComponent } from './../modal-token/modal-token.component';
import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '../interfaces/store';

@Component({
  selector: 'app-form-array-test',
  templateUrl: './form-array-test.component.html',
  styleUrls: ['./form-array-test.component.scss'],
})
export class FormArrayTestComponent implements OnInit {
  form: FormGroup;

  panelOpenState = false;
  storeId!: '123123xxx-123123-xxxx';
  idRappi = '3fa85f64-5717-4562-b3fc-2c963f66afa6';
  idIfood = '3fa85f64-5717-4562-b3fc-2c963f66afa6';

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

  constructor(private formBuilder: FormBuilder, private matDialog: MatDialog) {
    this.form = this.formBuilder.group({
      stores: this.formBuilder.array([]),
    });
  }

  ngOnInit(): void {
    this.dataStores.map(item =>
      item.storeModalitys.forEach(() => {
        this.add();
      })
    );
    this.patchValues();
  }

  patchValues() {
    let data = {
      stores: [
        {
          id: 1,
          storeModality: {
            storeId: this.dataStores[0].storeId,
            modalityId: this.listModality[0].id,
            storeCode: this.dataStores[0].storeModalitys[0].storeCode,
            cashierCode: this.dataStores[0].storeModalitys[0].cashierCode,
          },
          openingHours: [
            {
              dayWeek: 1,
              initialTime: '00:01',
              endTime: '00:59',
            },
          ],
          salesChannel: [
            {
              salesChannelId: [this.listSalesChannel[0].salesChannelId,this.listSalesChannel[1].salesChannelId],
              token: '22',
            }
          ],
        },
      ],
    };
    this.form.patchValue(data);
    console.log('FORM', this.form.value);
  }

  get getMyFormArray(): FormArray {
    return this.form.get('stores') as FormArray;
  }

  getOpeningHoursFormArray(form: any): FormArray {
    return form.get('openingHours') as FormArray;
  }

  getSalesChannelFormArray(form: any): FormArray {
    return form.get('salesChannel') as FormArray;
  }

  selectedChannels(event: any, index: number): void {
    const value = event.source.value;
    const isSelected = event.source.selected;
    const canal = this.idIfood ? 'iFood' : 'Rappi';

    // Abrir modal para incluir token
    if (
      (isSelected && value === this.idIfood) ||
      (isSelected && value === this.idRappi)
    ) {
      this.matDialog
        .open(ModalTokenComponent, {
          width: '400px',
          data: {
            title: `Insira o Token para o ${canal}`,
          },
        })
        .afterClosed()
        .subscribe(value => {
          if (value) {
            console.log('Com Token:', value);
          } else {
            console.log('Sem Token:', value);
          }
        });
    }
  }

  add() {
    this.getMyFormArray.push(this.getModalityForGroup());
    let formData = this.form.value;
  }

  getModalityForGroup(): FormGroup {
    return this.formBuilder.group({
      id: this.getMyFormArray.controls.length + 1,
      storeModality: this.formBuilder.group({
        storeId: ['', Validators.required],
        modalityId: ['', Validators.required],
        storeCode: [''],
        cashierCode: [''],
      }),
      openingHours: this.formBuilder.array([
        this.formBuilder.group({
          dayWeek: 1,
          initialTime: [''],
          endTime: [''],
        }),
      ]),
      salesChannel: this.formBuilder.array([
        this.formBuilder.group({
          salesChannelId: [''],
          token: [''],
        }),
      ]),
    });
  }

  remove(index: number): void {
    this.getMyFormArray.removeAt(index);
  }
}
