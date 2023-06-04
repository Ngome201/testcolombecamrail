import { Component } from '@angular/core';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-save-item',
  templateUrl: './save-item.component.html',
  styleUrls: ['./save-item.component.css']
})
export class SaveItemComponent {
  active : String =""
  levels : string[] =[];
  shapes : string[] =['A6','A5','A4']
  types : string[] = ['HC','TP','GC','DL','SQ','PL','Dessin']
  pages : string[] = ['32p','50p','100p','120p','144p','200p','288p','300p','400p']
  quantity =0;
  section : string = ''

  constructor(
    private itemService : ItemService
  ){}

  setA(){
    this.active = "accessory"
  }
  setB(){
    this.active = "book"
  }
  setEB(){
    this.active = "exerciseBook"
  }

  setAnglo(){
    this.levels = ['PN','N1','N2','class1','class1','class2','class3','class4','class5','class6',
                    'form1','form2','form3','form4','form5', 'lower sixt', 'upper sixth']
    this.section = 'Anglophone'
    }

  setFranco(){
    this.levels = ['PS','MS','GS','SIL','CP','CE1','CE2','CM1','CM2',
                    '6ème','5ème','4ème','3ème','2nd','1ère','Tle']
    this.section = 'Francophone'
  }

  saveItem(data:any){
    switch(data.category){
      case 'exerciseBook':
        console.log(data);
        this.itemService.saveExerciseBook(data)
            .subscribe((msg)=>{
              console.log(msg)
              window.alert(msg)
            });
        break;
      case 'book':
        console.log(data);
        this.itemService.saveBook(data)
            .subscribe((msg)=>{
              console.log(msg)
              window.alert(msg)
            });
        break;
      case 'accessory':
        console.log(data);
        this.itemService.saveAccessory(data)
            .subscribe((msg)=>{
              console.log(msg)
              window.alert("msg")
            });
        break;
    }

  }
}
