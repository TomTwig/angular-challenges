import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'flatten'
})
export class FlattenPipe implements PipeTransform {
    transform(values: any[]): unknown {
        return this.flattenArray(values);
    }

    private flattenArray(arr: any[]): any[] {
        const result: any[] = [];

        arr.forEach((value): void => {
            if (Array.isArray(value)) {
                result.push(...this.flattenArray(value));
            } else {
                result.push(value);
            }
        });

        return result;
    }
}
