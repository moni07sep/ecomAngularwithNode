
import {Pipe,PipeTransform} from "@angular/core";
import { JsonPipe } from '@angular/common';
@Pipe({
    name:"subCategoryFilter",
    pure: true
})

export class FilterPipe implements PipeTransform{
    transform(val:any,arg) {
        
        console.log(arg);
        //let argu =JSON.stringify(arg)
        //console.log(val.filter(x => [arg].includes(x.subCatagory)))
        if(arg===undefined|| arg==[]){
             return val;
        }else{
            //Typescript filter array of objects by an array
            //5e42a8ed94a5ad29089453d2,5e42a8d694a5ad29089453d1
            //let filteredData =val.filter(x => [arg].indexOf(x.subCatagory)!== -1)
            let filteredData =val.filter(x => arg.includes(x.subCatagory));
            console.log(filteredData);
            let filteredData1 =val.filter(x => ["5e42a8ed94a5ad29089453d2","5e42a8d694a5ad29089453d1"].includes(x.subCatagory));

            console.log(filteredData1);
            return filteredData;
        }

        
      
    }
    
}