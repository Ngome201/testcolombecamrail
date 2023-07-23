import { Component } from '@angular/core';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-save-item',
  templateUrl: './save-item.component.html',
  styleUrls: ['./save-item.component.css']
})
export class SaveItemComponent {
  active : string =""
  levels : string[] =[];
  shapes : string[] =['A6','A5','A4']
  types : string[] = ['HC(Hard Cover)','TP(Travaux Pratiques)','GC(Grands Carreaux)',
  'DL(Double Ligne)','SQ(Square)','PL(Plain)','Dessin']
  pages : string[] = ['20L','32p','40L','50p','60L','80L','100p','120p','144p','200p','288p','300p','400p','500p','600p','700p','800p','900p','1000p']
  quantity =0;
  section : string = ''

  constructor(
    private itemService : ItemService
  ){}

  setA(){
    this.active = "ACCESSORY"
  }
  setB(){
    this.active = "BOOK"
  }
  setEB(){
    this.active = "EXERCISE_BOOK"
  }

  setAnglo(){
    this.levels = ['PN','N1','N2','class1','class2','class3','class4','class5','class6',
                    'form1','form2','form3','form4','form5', 'lower sixt', 'upper sixth']
    this.section = 'ANGLOPHONE'
    }

  setFranco(){
    this.levels = ['PS','MS','GS','SIL','CP','CE1','CE2','CM1','CM2',
                    '6ème','5ème','4ème','3ème','2nd A','2nd C','1ère A','1ère D','1ère C','Tle A','Tle D','Tle C']
    this.section = 'FRANCOPHONE'
  }

  saveItem(data:any, active : string){
    switch(active){
      case 'EXERCISE_BOOK':
        
        this.itemService.saveExerciseBook(data)
            .subscribe((msg)=>{
              window.alert(msg.msg)
            });
        break;
      case 'BOOK':
        
        this.itemService.saveBook(data)
            .subscribe((msg)=>{
              window.alert(msg.msg)
            });
        break;
      case 'ACCESSORY':
        
        this.itemService.saveAccessory(data)
            .subscribe((msg)=>{
              window.alert(msg.msg)
            });
        break;
    }

  }
}
