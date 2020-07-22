
import {Pipe,PipeTransform} from "@angular/core";
import { JsonPipe } from '@angular/common';
@Pipe({
    name:"subCategoryFilter",
    pure: true
})

export class FilterPipe implements PipeTransform{
    transform(val:any,arg) {
        
        if(arg==undefined|| arg==[]){
             return val;
        }else{
            //Typescript filter array of objects by an array
            let filteredData =val.filter(x => arg.includes(x.subCatagory));
            return filteredData;
        }

        
      
    }
    
}