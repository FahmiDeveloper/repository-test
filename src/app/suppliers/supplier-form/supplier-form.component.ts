import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { take } from 'rxjs/operators';
import { Supplier } from 'src/app/shared/models/supplier.model';
import { SupplierService } from 'src/app/shared/services/supplier.service';

@Component({
  selector: 'app-supplier-form',
  templateUrl: './supplier-form.component.html',
  styleUrls: ['./supplier-form.component.scss']
})
export class SupplierFormComponent implements OnInit {

  supplierId;
  supplier: Supplier = new Supplier();

  phoneMobileNumberPattern = "^((\\+91-?)|0)?[0-9]{8}$";

  constructor(private supplierService: SupplierService, private router: Router, private route: ActivatedRoute) { 
    this.supplierId = this.route.snapshot.paramMap.get('id');
    if (this.supplierId) {
      this.supplierService.getSupplierId(this.supplierId).valueChanges().pipe(take(1)).subscribe(supplier => {
      this.supplier = supplier;
    });
  }
  }

  ngOnInit(): void {
  }

  save(supplier) {
    if (this.supplierId) this.supplierService.update(this.supplierId, supplier);
    else this.supplierService.create(supplier);
    this.router.navigate(['/suppliers']);
  }

}
