import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Role } from '../state/_models/role.model';

@Injectable()
export class RoleService {

  constructor(private http: HttpClient) { }

  // getAllRoles(): Observable<Role[]> {

  // }

  // getRoleById(roleId: string): Observable<Role> {

  // }
}