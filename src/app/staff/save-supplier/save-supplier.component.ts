import { Component } from '@angular/core';
import { SupplierService } from 'src/app/services/supplier.service';

@Component({
  selector: 'app-save-supplier',
  templateUrl: './save-supplier.component.html',
  styleUrls: ['./save-supplier.component.css']
})
export class SaveSupplierComponent {
  suppliers : any
  activeBlock : any 
  supplier : any
  categories = ["EXERCISE_BOOK","BOOK","ACCESSORY"]
  constructor(
    private supplierService : SupplierService 
  ){
  }
  setSaveOption(){
    this.activeBlock = "SAVE"
  }

  setListOption(){
    this.suppliersList()
    this.activeBlock = "LIST"
  }

  saveSupplier(data : any){
    this.supplierService.saveSupplier(data)
        .subscribe((msg)=>{
          alert(msg.msg)
        })

  }

  suppliersList(){
    this.supplierService.supplierList()
        .subscribe((data)=>{
          console.log(data)
          this.suppliers = data
        })
  }

  deleteSupplier(supplierId : any){
    this.supplierService.deleteSupplier(supplierId)
        .subscribe((data)=>{
          console.log(data)
        })
    this.setListOption()
  }

  editSupplier (supplierId : any){
    this.supplierService.editSupplier(supplierId)
        .subscribe((data)=>{
          this.supplier = data
          this.activeBlock = 'EDIT'
        })
  }
  updateSupplier(data : any){
    this.supplierService.updateSupplier(data)
    .subscribe((data)=>{
      this.suppliers = data
    })
    this.setListOption()
  }
}
