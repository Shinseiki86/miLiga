import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
    name: 'filter'
})
export class FilterPipe implements PipeTransform {
    transform(items: any[], searchText: string): any[] {
        if (!items) {
            return [];
        }
        if (!searchText) {
            return items;
        }
        searchText = searchText.toLowerCase();
        return items.filter( it => {
            let encontrado = false;
            /*console.log(it.length);
            let mm = <any[]>it;
            mm.forEach(function (value) {
              console.log(value);
            }); */

            if(it.nombre)
                encontrado = it.nombre.toLowerCase().includes(searchText);
            if(it.local )
                encontrado = encontrado || it.local.toLowerCase().includes(searchText);
            if(it.lugar)
                encontrado = encontrado || it.lugar.toLowerCase().includes(searchText);
            if(it.visitante)
                encontrado = encontrado || it.visitante.toLowerCase().includes(searchText);

            return encontrado;
        });
    }
}