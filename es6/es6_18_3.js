let apple = {
  name : 'apple',
}//gc의 대상임, (아무것도 참조되지 않기 때문에)


let orange = apple;
apple = null
orange = null
