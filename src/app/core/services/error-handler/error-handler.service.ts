import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
// service
import { AuthService } from '../auth/auth.service';
import { DialogService } from '@backend/services/dialog.service';
// component
import { DialogComponent } from '@backend/shared/components/dialog/dialog.component';

import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService {
  title: string;
  message: string;
  dataIcon: string;

  constructor(private authService: AuthService, private dialogService: DialogService, private router: Router, private toastr: ToastrService) { }

  permissionDenied() {
    this.title = 'Permission denied.';
    this.message = 'You do not have access to this feature. Please contact your system administrator to proceed.';
    this.dataIcon = 'not_interested';
    this.toastr.error(this.message);
  }

  serviceUnavailable() {
    this.title = 'We\'re sorry. This is not working properly.';
    this.message = 'We have been notified of this mistake and we are looking to fix it.';
    this.dataIcon = 'sentiment_very_dissatisfied';
    this.toastr.error(this.message);
  }

  openDialog() {
    const data = {
      width: '600px',
      type: 'warning',
      title: this.title,
      message: this.message,
      showDialogIcon: false,
      data: {
        titleIcon: this.dataIcon
      }
    };
    const dialogRef = this.dialogService.openModel(DialogComponent, data);
    dialogRef.afterClosed().subscribe(result => {
      this.router.navigate(['/']);
    });
  }

  notAuthorized() {
    this.authService.logout();
    this.openDialog();
  }

  handleError(response: HttpErrorResponse) {
    if (response.status === 401) {
      this.notAuthorized();
    } else if (response.status === 403) {
      this.permissionDenied();
    } else if (response.status === 500 || response.status === 503 || response.status === 400 || response.status === 422) {
      this.serviceUnavailable();
    }

  }
}
