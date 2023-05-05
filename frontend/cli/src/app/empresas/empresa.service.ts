import { Injectable } from '@angular/core';
import { Observable, map, of, pipe } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { DataPackage } from '../data-package';

import { Empresa } from './empresa';
import { EMPRESAS } from './mock-empresas';
import { NonNullAssert } from '@angular/compiler';

@Injectable({
    providedIn: 'root'
})
export class EmpresaService {
    private empresasUrl = 'rest/empresas'; // URL to web api

    constructor(
        private http: HttpClient
    ) { }

    all(): Observable<Empresa[]> {
        return this.http.get<DataPackage>(this.empresasUrl).pipe(
            map((response: DataPackage) => {
                return <Empresa[]>response.data;
            }));// REST
    }

    get(id: number): Observable<Empresa> {
        return this.http.get<DataPackage>(`${this.empresasUrl}/id/${id}`).pipe(
            map((response: DataPackage) => {
                return <Empresa>response.data;
            }));
    }

    save(empresa: Empresa): Observable<Empresa> {
        return this.http[empresa.id?"put":"post"]<DataPackage>(this.empresasUrl, empresa).pipe(map((response: DataPackage) => { return <Empresa>response.data;}));
    }
}