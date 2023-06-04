import { Component } from '@angular/core';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.css']
})
export class ItemsListComponent {
  shapes : string[] =['A6','A5','A4']
  types : string[] = ['HC','TP','GC','DL','SQ','PL','Dessin']
  pages : string[] = ['32p','50p','100p','120p','144p','200p','288p','300p','400p']
  levels : string[]=[]
  sections : string[] = ["Anglophone","Francophone"]
  
  countClickedEB: boolean = true //indicates if the list of EB is already fetched
  countClickedB: boolean = true  //indicates if the list of B is already fetched
  countClickedA: boolean = true  //indicates if the list of A is already fetched

  exerciseBooks : any
  books : any
  accessories : any
 
  keys : any
  isActive : number // determine the active Item which is been displayed
                    // 1:ExerciseBook   2:Book    3:Accessory
  activeBlock : string

  exerciseBook : any
  book : any
  accessory : any

  constructor(
    private itemService : ItemService
  ){
    this.isActive=0
    this.activeBlock ='table'
  }
   setEB(){
     
    if (this.countClickedEB ==true){
      this.exerciseBooks =this.itemService.listItems(1)
      this.isActive = 1
      this.countClickedEB = false
    }         
    else 
    {this.isActive = 1
    this.activeBlock ='table'}

  }
  setB(){
     
    if (this.countClickedB ==true){
      this.books =this.itemService.listItems(2)
      this.isActive = 2
      this.countClickedB = false
    }         
    else {this.isActive = 2
      this.activeBlock ='table'}       
  }
  setA(){
    if (this.countClickedA ==true){
      this.accessories =this.itemService.listItems(3)
      this.isActive = 3
      this.countClickedA =false
    }         
    else {this.isActive = 3
      this.activeBlock ='table'}       
  }
  editExerciseBook(id : any){
    this.itemService.editExerciseBook(id)
                    .subscribe((data)=>{
                      this.exerciseBook = data
                    })
    this.activeBlock = 'editExerciseBook'
  }
  editBook(id : any){
    this.itemService.editBook(id)
                    .subscribe((data)=>{
                      this.book = data
                      if(data.section =='Anglophone'){
                        this.levels = ['PN','N1','N2','class1','class1','class2','class3','class4','class5','class6',
                        'form1','form2','form3','form4','form5', 'lower sixt', 'upper sixth']
                      }
                      else{
                        this.levels = ['PS','MS','GS','SIL','CP','CE1','CE2','CM1','CM2',
                        '6ème','5ème','4ème','3ème','2nd','1ère','Tle']
                      }
                    })
    this.activeBlock = 'editBook'

  }
  editAccessory(id : any){
    this.itemService.editExerciseBook(id)
                    .subscribe((data)=>{
                      this.accessory = data
                    })
    this.activeBlock = 'editAccessory'

  }
  updateExerciseBook(data: any){
    console.log(data)
    this.itemService.updateExerciseBook(data)
                    .subscribe((msg)=>{
                      console.log(msg)
                    })
    window.alert('item was successfully updated')
    this.activeBlock = "exerciseBook"
  }
  updateBook(data: any){
    console.log(data)

    this.itemService.updateBook(data)
                    .subscribe((msg)=>{
                      console.log(msg)
                    })
    window.alert('item was successfully updated')
    this.activeBlock = "book"
  }
  updateAccessory(data: any){
    this.itemService.updateAccessory(data)
                    .subscribe((msg)=>{
                      console.log(msg)
                    })
    window.alert('item was successfully updated')
    this.activeBlock = "accessory"
  }
}
