/** 태그된 템플릿 리터럴 */
//바로호출하면 되니깐 힙에 저장X
let person = "hong";
let age = 25;
`That ${person} is a ${age}!!`
function myTag(strings, personName, personAge){ //스택에는 myTag 이름이 저장됨
    //strings : ['That ',' is a',' !!'] 자동으로 만들어짐
    let str = strings[1];  //'is a'
    let ageStr;

    personAge > 50? ageStr="grandPa" : ageStr="youngster";
    
    return personName + str + ageStr;
}

let sentence = myTag`That ${person} is a ${age}!!`;/* ${person},${age} = 값 */
console.log(sentence);  //hong is a youngster