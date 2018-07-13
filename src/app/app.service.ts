import { Injectable } from '@angular/core';
import { Observable, Subject, throwError} from 'rxjs';

export class AppService {

  public stringSubject = new Subject<string>();

  passValue(data) {
    this.stringSubject.next(data);
  }

}