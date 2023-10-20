class uberpricecalculator{
  constructor(baseRate, ratePerMile,ratePerMinute){
    this.baseRate=baseRate;
    this.ratePerMile=ratePerMile;
    this.ratePerMinute=ratePerMinute;
  }
  calculatePrice(distanceInMiles,timeInMinues){
    const price =this.baseRate+(distanceInMiles*this.ratePerMile)+(timeInMinues*this.ratePerMinute);
return price;
  }
}
const calculator =new uberpricecalculator(10,5,0.5);
const distance =10;

const time =20;

const price =calculator.calculatePrice(distance,time);
console.log (`estimated uber price: $${price.toFixed(5)}`);
