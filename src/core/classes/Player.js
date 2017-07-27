export default class Player{
  constructor(name, sign, color){
    this.id = name.toLowerCase().split(' ').join('');
    this.name = name;
    this.sign = sign;
    this.color = color;
    this.hisTurn = false;
  }
  toggleTurn(){
    this.hisTurn = !this.hisTurn;
    return this.hisTurn;
  }
  yourTurn(){
    this.hisTurn = true;
  }
  oppositeTurn(){
    this.hisTurn = false;
  }
}