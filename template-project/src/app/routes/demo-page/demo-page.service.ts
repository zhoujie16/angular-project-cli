import { Injectable, inject } from '@angular/core';
import { _HttpClient } from '@delon/theme';

@Injectable()
export class DemoPageService {
  private readonly http = inject(_HttpClient);
}

// http://localhost:8081/ticket-admin-ui/api/sso/login
