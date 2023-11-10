import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { ISearchResponse } from '@core/models/response';

// TODO: improve error handling
@Injectable({
  providedIn: 'root',
})
export class ErrorhandlerService {
  handleError<T extends ISearchResponse>(
    error: HttpErrorResponse
  ): Observable<T> {
    return of({
      error,
    } as T);
  }
}
