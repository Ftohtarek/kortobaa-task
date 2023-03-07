import { DialogRef, DIALOG_DATA } from '@angular/cdk/dialog';
import { Component, Inject } from '@angular/core';
export interface DialogData {
  deletedElement: string;
}
@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.scss']
})
export class ConfirmComponent {
  constructor(public dialogRef: DialogRef<boolean>, @Inject(DIALOG_DATA) public data: DialogData) { }

}
