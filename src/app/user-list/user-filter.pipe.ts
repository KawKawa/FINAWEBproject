import { PipeTransform, Pipe } from '@angular/core';
import {Iuser} from './user';

@Pipe({
    name:'userfilter'
})

export class userFilterPipe implements PipeTransform{

    transform(value: Iuser[], args : string[]):Iuser[]{

    let filter : string= args[0] ? args[0].toLocaleLowerCase() : null;
    return filter ? value.filter((user : Iuser ) =>
    user.username.toLocaleLowerCase().indexOf(filter)!=-1) : value ; 
    }

} 