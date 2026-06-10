import { Dialog } from '@angular/cdk/dialog';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CdkModalForm } from './cdk-modal-form/cdk-modal-form';

@Component({
  selector: 'app-cdk-modal',
  imports: [],
  templateUrl: './cdk-modal.html',
  styleUrl: './cdk-modal.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CdkModal {
  private dialog = inject(Dialog);

  content = Array.from({ length: 2 });

  protected openModal() {
    /** 
     * implement what component we should show as dialog 
     * @param in {} we can add some options form modal behavior (watch in api for modal)
     * this.dialog.open(CdkModalForm, { disableClose: true }); disables close by backdrop click
     * */
    this.dialog.open(CdkModalForm);
  }
}
