/** 객체 디스트럭처링 - 중첩된 객체 형태 */
const person = {
    name : "hong",
    last : "gildong",
    links : {
        social : {
            facebook : "https://www.facebook.com/alberto.montalesi",
            google : "https://www.google.com/",
            naver : "https://www.naver.com/"
        },
        website : "https://albertomontalesi.github.io/",
    },
};

const {facebook,google,naver} = person.links.social;
const {facebook : fb} = person.links.social;

console.log(`facebook : ${facebook}`);
console.log(`facebook : ${fb}`);
console.log(`google : ${google}`);
console.log(`naver : ${naver}`);