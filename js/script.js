// 1. Сделайте функцию, которая отнимает от первого числа второе и делит на
// третье. Числа передаются параметром.
console.log('Задание 1');
    const fTask1=function(num1,num2,num3){
        return (num1-num2)/num3;
    }
    console.log(`Результат выполнения функции ${fTask1(7,1,2)}`);
console.log('---------------------------------');
// 2. Сделайте функцию, которая возвращает куб числа и его квадрат. Число
// передается параметром.
console.log('Задание 2');
    const fTask2=function(numTask2){
        return [numTask2*numTask2,numTask2*numTask2*numTask2];
        
    }
    let arrTask2=fTask2(2);
    console.log(`Квадрат чила: ${arrTask2[0]}`);
    console.log(`Куб чила: ${arrTask2[1]}`);
console.log('---------------------------------');
// 3. Напишите функции min и max, которые возвращают меньшее и большее из
// чисел a и b.
console.log('Задание 3');
    const minTask3=function(a,b){
        if(a<b){
            return a;
        }else if(b<a){
            return b;
        }else{
            return 'Числа равны';
        }
    }
    const maxTask3=function(a,b){
        if(a>b){
            return a;
        }else if(b>a){
            return b;
        }else{
            return 'Числа равны';
        }
    }

    let numTask3_1=+prompt('Введите число а');
    let numTask3_2=+prompt('Введите число b');
    console.log(`Большее из чисел: ${maxTask3(numTask3_1,numTask3_2)}`);
    console.log(`Меньшее из чисел: ${minTask3(numTask3_1,numTask3_2)}`);
console.log('---------------------------------');
// 4. Напишите две функции: первая ф-ция должна возвращать массив с
// числовыми значениями, диапазон которых должен вводиться пользователем
// с клавиатуры; вторая – выводить полученный массив.
console.log('Задание 4');
    const fTask4_1=function(numBegin,numEnd){
        let arrayTask4=[];
        
        for(let i=numBegin;i<=numEnd;i++){
            console.log('i='+i);
            arrayTask4.push(i);
            
        }
        
        fTask4_2(arrayTask4);
    }
    const fTask4_2=function(array){
        
        for(let i=0;i<array.length;i++){
            console.log(array[i]);
        }
        console.log(`Полученный массив ${array}`);
    }
    let startTask4=+prompt('Введите с какого число начинается массив');
    let finishTask4=+prompt('Введите до какого числа создается массив');
    fTask4_1(startTask4,finishTask4);
   
console.log('---------------------------------');
// 5. Сделайте функцию isEven() (even - это четный), которая параметром
// принимает целое число и проверяет: четное оно или нет. Если четное - пусть
// функция возвращает true, если нечетное — false.
console.log('Задание 5');
    const isEven=function(number){
        if(number%2===0){
            return true;
        }else {
            return false;
        }
    }
    let numTask5=+prompt('Введите число');
    console.log(isEven(numTask5));
console.log('---------------------------------');
// 6. Напишите ф-цию, в которую передается массив с целыми числами.
// Верните новый массив, где останутся лежать только четные из этих чисел.
// Для этого используйте вспомогательную функцию isEven из предыдущей
// задачи.
console.log('Задание 6');
const fTask6=function(array6){
    let arrTask6_new=[];
    for(let i=0;i<array6.length;i++){
        if(isEven(array6[i])===true){
            arrTask6_new.push(array6[i]);
        }
    }
    return arrTask6_new;
};
    let arrTask6=[1,2,3,4,5,6,7,8,9];
    console.log(`Полученный массив ${fTask6(arrTask6)}`);
console.log('---------------------------------');
// 7. Напишите ф-цию, которая рисует следующую пирамидку (исп. вложенные
//     циклы):
//     1
//     22
//     333
//     Кол-во рядов должно вводиться параметром. Если пользователь ввел доп.
//     параметр, непредусмотренный ф-цией по умолчанию - один любой символ,
//     кроме пробела, то пирамида должна быть нарисована этим символом,
//     например:
//     *
//     **
//     ***
console.log('Задание 7');
const fTask7=function(layer){
  
    for(let i=1;i<=layer;i++){
        let stringTask7='';
        for(let j=1;j<=i;j++){
            if(arguments[1]!==''){
                stringTask7+=arguments[1];
            }else{
                stringTask7+=i;
            }
           
           
        }
        console.log(stringTask7);
    }
}
    let numTask7=+prompt('Введите количество ярусов');
    let symbolTask7=prompt('(необязательно) Введите символ');
    fTask7(numTask7,symbolTask7);
console.log('---------------------------------');
// 8. Напишите ф-цию, которая рисует равнобедренный треугольник из
// звездочек:

//   *
//  ***
// *****
// Кол-во рядов должно вводиться с клавиатуры. Доп., напишите такую же ф-
// цию, но которая выведет перевернутый треугольник.
console.log('Задание 8');
    const fTask8=function(layerTask8){
        let arrTask8=['*'];
        let jCounter=layerTask8-1;
        for(let i=0; i<layerTask8;i++){
        
            for(let j=jCounter; j>0;j--){
                arrTask8.unshift(' ');
            }
            let stringArr=arrTask8.join('');
            console.log(stringArr);
            stringArr='';
            arrTask8.splice(0,jCounter);
            arrTask8.unshift('*');
            arrTask8.push('*');
            jCounter=jCounter-1;
        
    
         }
    }
    const fTask8Reverse=function(layerTask8){
        console.log('Перевернутая пирамида');
        let arrTask8=['*'];
        for(let i=0;i<layerTask8-1;i++){
            arrTask8.push('*');
            arrTask8.unshift('*');
        }
    
        for(let i=layerTask8-1; i>=0;i--){
            let stringArr=arrTask8.join('');
            console.log(stringArr);
            arrTask8.unshift(' ');
            arrTask8.splice(arrTask8.indexOf('*'),1);
            arrTask8.splice(arrTask8.lastIndexOf('*'),1);
            
            stringArr='';
        }
    }
    let numberTask8=+prompt('Введите количество ярусов пирамиды');
    fTask8(numberTask8);
    fTask8Reverse(numberTask8);
console.log('---------------------------------');
// 9. Напишите ф-цию, которая возвращает массив заполненный числами
// Фибоначи от 0 до 1000.
console.log('Задание 9');
    const fTask9=function(){
        let arrayTask9=[0,1];
        for(let i=arrayTask9.length;;i++){
       
            arrayTask9.push(arrayTask9[i-1]+arrayTask9[i-2]);
         
            if(arrayTask9[i]>=1000){
                //arrayTask9.pop();
                break;
            }
        }
        return arrayTask9;
    }
    console.log(`Полученная последовательность ${fTask9()}`);
console.log('---------------------------------');
// 10. Дано число. Сложите его цифры. Если сумма получилась более 9-ти,
// опять сложите его цифры. И так, пока сумма не станет однозначным числом
// (9 и менее). Исп. Рекурсию.
console.log('Задание 10');
    const fTask10=function(numberT10){
        let sumTask10=0;
        for(let i=0;i<numberT10.length;i++){
            sumTask10+=+numberT10[i];
            
        }
        console.log('Сумма '+sumTask10);
        if(sumTask10>9){
            numberT10=sumTask10.toString();
            fTask10(numberT10);
        }
        else{
            
            console.log(`Сумма меньше девяти: ${sumTask10}`);
        }
    };
    let numberTask10=prompt('Введите число');

   fTask10(numberTask10);
console.log('---------------------------------');
// 11. Дан массив с числами (передается параметром). Выведите
// последовательно его элементы, используя рекурсию и не используя цикл.
console.log('Задание 11');
    const fTask11=function(array11){
        if(iTask11<array11.length){
            console.log(array11[iTask11]);
            iTask11=iTask11+1;
            fTask11(array11);
        }
    }
    let iTask11=0;
    let arrTask11=[1,2,3,4,5,6,7,8,9];
    fTask11(arrTask11);
console.log('---------------------------------');
// 12. Напишите ф-цию, запрашивающую имя, фамилия, отчество и номер
// группы студента и выводящую введённые данные в следующем виде:

// *****************************
// * Домашняя работа: «Функции» *
// * Выполнил: студент гр. W4017 *
// * Иванов Иван Иванович *
// *****************************

// Размер рамки должен определятся автоматически по самой длинной строке.
// Рамку вывести в консоль.
console.log('Задание 12');
    const fDrawStars=function(length){
        let strStars='';
        for(let i=0; i<length;i++){
            strStars+='*';
        }
        console.log(strStars);
    }
    const fDrawRightBorder=function(maxL,str){
        let diff=maxL-str.length;
        if(diff!==0){
            for(let i=str.length-1;i<maxL-1;i++){
                str+=' ';
            }
        }
        str+="*";
        console.log(str);
    }
    const fTask12=function(){
        
        let surname=prompt('Введите фамилию');
        let name=prompt('Введите имя');
        let otch=prompt('Введите отчество');
        let group=prompt('Введите группу');
        let str1='* Домашняя работа: «Функции» '
        let str2='* Выполнил: студент гр. '+group+' ';
        let str3='* '+surname+' '+name+' '+otch+' ';
        let maxLength=0;
        switch(true){
            case str1.length>str2.length && str1.length>str3.length:
                maxLength=str1.length;
            break;
            case str2.length>str1.length && str2.length>str3.length:
                maxLength=str2.length;
            break;
            case str3.length>str1.length && str3.length>str2.length:
                maxLength=str3.length;
            break;
        }
        fDrawStars(maxLength+1);
        fDrawRightBorder(maxLength,str1);
        fDrawRightBorder(maxLength,str2);
        fDrawRightBorder(maxLength,str3);
        fDrawStars(maxLength+1);

    }
    fTask12();
console.log('---------------------------------');
// 13. Напишите ф-цию, которая должна проверить правильность ввода адреса
// эл. почты, неиспользуя регулярные выражения. Почта верна при условии:
// a. весь адрес не должен содержать русские буквы и спецсимволы, кроме
// одной «собачки», знака подчеркивания, дефиса и точки, причем они не могут
// быть первыми и последними в адресе, и идти подряд, например: «..», «@.»,
// «.@» или «@@», «_@», «@-», «--» и т.п.
// b. имя эл. почты (до знака @) должно быть длиной более 2 символов, причем
// имя может содержать только буквы, цифры, но не быть первыми и
// единственными в имени, и точку;
// c. после последней точки и после @, домен верхнего уровня (ru, by, com и
// т.п.) не может быть длиной менее 2 и более 11 символов.
console.log('Задание 13');
    const examAt=function(array){
        let counterAt=0;
        for(let i=0; i<array.length;i++){
            if(array[i]==='@'){
                counterAt=counterAt+1;

            }
            if(counterAt>1){
                return 1;
            }
        }
    }
    const examSpecSymbol=function(array){
        //   \
        let arrSpec=['!','#','$','%','^','&','*','(',')','+','=','[',']','?','>','<',':','"','|','{','}','/',',',';',"'",'\\'];
       
            for(let i=0;i<arrSpec.length;i++){
                if(array.includes(arrSpec[i])){
                    return 1;
                   
                }
            }


       
    }
    const examA=function(array){
        
        for(let i=0;i<array.length;i++){
            if(array[i]>='А' && array[i]<='ё'){
               
                return 1;
            }else if(array[i]==='@' || array[i]==='-' || array[i]==='_' || array[i]==='.'){
                    if(i===0 || i===array.length-1){
                        return 2;
                    }else if(array[i+1]===array[i]){
                        return 3;
                    }
            }


        }
    }
    const examB=function(array){
      
        if(array.length<2){
             
             return 1;
        }
       
        if(+array[0]>=0 && +array[0]<=9){
                
                return 2;
        }
      
        let numberCounter=0;
        let mistakeCounter=0;
      
        for(let i=0;i<array.length;i++){
            
            if((array[i]<'A' || array[i]>'z') && (array[i]<'0' || array[i]>'9') && array[i]!=='.'){
                mistakeCounter=mistakeCounter+1;
                
            }
            else if(+array[i]>=0 && +array[i]<=9){
                numberCounter=numberCounter+1;
            }
        }
        if(numberCounter===array.length){
            return 3;
        }
        if(mistakeCounter===0){
            return 0;

        }else{
            return 4;
        }
    }
    
    const examС=function(array){
        if(array.length>11 || array.length<2){
            
            return 1;
        }else{
            return 0;
        }
    }
    const fTask13=function(email){
        let counterAt=0;
        let StartEmail=email.substring(0,email.indexOf('@'));
       
        let EndEmail=email.substr(email.lastIndexOf('.')+1);
       
        
        switch(true){
            case email==='':
                console.log("Не введен email");
            break;
            case examSpecSymbol(email)===1:
                console.log("Используются недопустимые спецсимволы");
            break;
            case examAt(email)===1:
                console.log("Не допускается использование больше одного символа '@' ");
            break;
            case examA(email)===1:
                console.log('Присутствуют русские символы');
            break;
            case examA(email)===2:
                console.log('Спецсимволы не могут находиться вначале или в конце');
            break;
            case examA(email)===3:
                console.log('Спецсимволы не могут идти друг за другом');
            break;
            case examB(StartEmail)===1:
                console.log('Длина имени электронной почты меньше двух символов');
            break;
            case examB(StartEmail)===2:
                console.log('Имя почты не должно начинаться с цифры');
            break;
            case examB(StartEmail)===3:
                console.log('Имя почты не должно состоять только из цифр');
            break;
            case examB(StartEmail)===4:
                console.log('Используются запрещенные символы');
            break;
            
            case examС(EndEmail)===1:
                console.log('Домен верхнего уровня не соответствует параметрам.Не менее 2-х символов и не более 11');
            break;
            default:
                console.log('E-mail прошел проверку');
            break;
        }
    }
    let eMail=prompt('Введите email');
    fTask13(eMail);
console.log('---------------------------------');



