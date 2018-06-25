import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'words'
})
export class WordsPipePipe implements PipeTransform {
    transform(value: number): String {
        if (value === undefined) {
            return 'Enter Number in TextBox';
        } else {
            const first = ['', 'one ', 'two ', 'three ', 'four ', 'five ',
                'six ', 'seven ', 'eight ', 'nine ', 'ten ', 'eleven ', 'twelve ', 'thirteen ',
                'fourteen ', 'fifteen ', 'sixteen ', 'seventeen ', 'eighteen ', 'nineteen '];
            const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
            const mad = ['', 'thousand', 'million', 'billion', 'trillion'];
            let word = '';
            for (let i = 0; i < mad.length; i++) {
                let tempNumber: any = value % (100 * Math.pow(1000, i));
                console.log(tempNumber);
                if (Math.floor(tempNumber / Math.pow(1000, i)) !== 0) {
                    if (Math.floor(tempNumber / Math.pow(1000, i)) < 20) {
                        console.log("second if" + word)
                        word = first[Math.floor(tempNumber / Math.pow(1000, i))] + mad[i] + ' ' + word;
                    } else {
                        word = tens[Math.floor(tempNumber / (10 * Math.pow(1000, i)))] +
                            " " + first[Math.floor(tempNumber / Math.pow(1000, i)) % 10] + mad[i] + ' ' + word;
                    }
                }
                tempNumber = value % (Math.pow(1000, i + 1));
                if (Math.floor(tempNumber / (100 * Math.pow(1000, i))) !== 0) {
                    word = first[Math.floor(tempNumber / (100 * Math.pow(1000, i)))] + 'hunderd ' + word;
                }
            }
            return word;
        }
    }

}