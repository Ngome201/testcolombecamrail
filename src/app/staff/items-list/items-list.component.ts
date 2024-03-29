import { Component } from '@angular/core';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.css']
})
export class ItemsListComponent {

  shapes : string[] =['A6','A5','A4']
  types : string[] = ['HC(Hard Cover)','TP(Travaux Pratiques)','GC(Grands Carreaux)',
                      'DL(Double Lignes)','SQ(Square)','PL(Plain)','Dessin']
  pages : string[] = ['20L','32p','40L','50p','60L','80L','100p','120p','144p','200p','288p','300p','400p','500p','600p','700p','800p','900p','1000p']
  levels : string[]=[]
  sections : string[] = ["ANGLOPHONE","FRANCOPHONE"]
  
  countClickedEB: boolean = true //indicates if the list of EB is already fetched
  countClickedB: boolean = true  //indicates if the list of B is already fetched
  countClickedA: boolean = true  //indicates if the list of A is already fetched

  exerciseBooks : any
  books : any
  accessories : any
 
  keys : any
  isActive : string // determine the active Item which is been displayed
  activeBlock : string

  exerciseBook : any
  book : any
  accessory : any

  constructor(
    private itemService : ItemService
  ){
    this.isActive = ""
    this.activeBlock ='table'
  }
   setEB(){
     
    if (this.countClickedEB ==true){
      this.exerciseBooks =this.itemService.listItems("EXERCISE_BOOK")
      this.isActive = "EXERCISE_BOOK"
      this.countClickedEB = false
    }         
    else 
    {this.isActive = "EXERCISE_BOOK"
    this.activeBlock ='table'}

  }
  setB(){
     
    if (this.countClickedB ==true){
      this.books =this.itemService.listItems("BOOK")
      this.isActive = "BOOK"
      this.countClickedB = false
    }         
    else {this.isActive = "BOOK"
      this.activeBlock ='table'}       
  }
  setA(){
    if (this.countClickedA ==true){
      this.accessories =this.itemService.listItems("ACCESSORY")
      this.isActive = "ACCESSORY"
      this.countClickedA =false
    }          
    else {this.isActive = "ACCESSORY"
      this.activeBlock ='table'}       
  }
  editExerciseBook(id : any){
    this.itemService.editExerciseBook(id)
                    .subscribe((data)=>{
                      this.exerciseBook = data
                      console.log(data)
                    })
    this.activeBlock = 'editExerciseBook'
  }
  editBook(id : any){
    this.itemService.editBook(id)
                    .subscribe((data)=>{
                      this.book = data
                      if(data.section =='Anglophone'){
                        this.levels = ['PN','N1','N2','class1','class2','class3','class4','class5','class6',
                        'form1','form2','form3','form4','form5', 'lower sixt', 'upper sixth']
                      }
                      else{
                        this.levels = ['PS','MS','GS','SIL','CP','CE1','CE2','CM1','CM2',
                        '6ème','5ème','4ème','3ème','2nd','1ère','Tle']
                      }
                      console.log(data)

                    })
    this.activeBlock = 'editBook'

  }
  editAccessory(id : any){
    this.itemService.editAccessory(id)
                    .subscribe((data)=>{
                      this.accessory = data
                      console.log(data)

                    })
    this.activeBlock = 'editAccessory'

  }
  updateExerciseBook(data: any,id : any){
    
    this.itemService.updateExerciseBook(data,id)
                    .subscribe((msg)=>{
                      console.log(msg)
                      window.alert(msg.msg)
                      })
    this.activeBlock = "exerciseBook"
  }
  updateBook(data: any,id : any){
    

    this.itemService.updateBook(data,id)
                    .subscribe((msg)=>{
                      console.log(msg)
                      window.alert(msg.msg)
                      })
    this.activeBlock = "book"
  }
  updateAccessory(data: any,id:any){
    this.itemService.updateAccessory(data,id)
                    .subscribe((msg)=>{
                      console.log(msg)
                      window.alert(msg.msg)
                      })
    this.activeBlock = "accessory"
  }

  deleteExerciseBook(id : any){
    if (confirm('are you sure you want to delete this item')) {
      this.itemService.deleteExerciseBook(id)
                    .subscribe((msg)=>{
                      window.alert(msg.msg)
                    })
                          }
    else return
    
  }

  deleteAccessory(id: any){
    if (confirm('are you sure you want to delete this item')) {
    this.itemService.deleteAccessory(id)
    .subscribe((msg)=>{
      window.alert(msg.msg)
    })
        }
      else return
  }

    deleteBook(id : any){
    if (confirm('are you sure you want to delete this item')) {
    this.itemService.deleteBook(id)
    .subscribe((msg)=>{
      window.alert(msg.msg)
    })
        } 
      else return

    }

}
