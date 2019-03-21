// prices
var priceArr = items.map(function(item) {
    return item.price
},[]);
console.log(priceArr);

var pricesum = priceArr.reduce(function (a, b){
    return a + b
})

var avg = pricesum / priceArr.length;


var avgrnd = parseFloat(avg).toFixed(2)
console.log (avgrnd);

document.querySelector("#answer1").innerHTML = `the average price for all items is $${avgrnd}`;

// Question #2

 var inbetween = items.filter(function(item){
     if(item.price > 14 && item.price < 18){
      return true;

}})
var itemsinbetween = inbetween.map(function(item){
    return item.title;
});
 console.log (itemsinbetween)

 document.querySelector("#answer2").innerHTML = `${itemsinbetween}`;

 //Question 3

 var currencyCode = items.filter(function(item){
     if(item.currency_code == "GBP")
     return true;
 });

 var GBP =currencyCode.map(function(item){
     return item.title;
 });
 
 var GBPP = currencyCode.map(function(item){
     return item.price;
 });
 
 console.log (GBPP)

 document.querySelector("#answer3").innerHTML = `${GBP} costs &#163;${GBPP}`

 //Question 4

 var wood = items.filter(function(item){
     return item.materials.indexOf("wood") !== -1
 });
 var woodtitle = wood.map(function(item){
     return item.title;
 })
 
 console.log(woodtitle)

 document.querySelector("#answer4").innerHTML = `${woodtitle}`

 //Question 5

 var eightormore =
 items
    .filter(item => item.materials.length >= 8)
    .map(item => `${item.title} has ${item.materials.length} materials:<br>${item.materials.join('<br>')}`)


    document.querySelector("#answer5").innerHTML = `${eightormore}`

 //question 6

 var madebysellers = items.filter(item => item.who_made === "i_did").length

 document.querySelector("#answer6").innerHTML = `${madebysellers} were made by their sellers`