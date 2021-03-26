import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class SupplierService {

  constructor(private db: AngularFireDatabase) { }

  create(supplier) {
    return this.db.list('/suppliers').push(supplier);
  }
}