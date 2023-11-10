import { HttpErrorResponse } from '@angular/common/http';

export interface ISearchResponse {
  generationDate: Date;
  error?: HttpErrorResponse;
}
