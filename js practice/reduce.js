const nums = [1,2,3];
const total = nums.reduce( function(acc,currval) {
 //   console.log(`acc: ${acc} and currval: ${currval}`);
    return acc+currval;
},0)

const myTotal =  nums.reduce( (acc,currval) => acc+currval,0)
// console.log(myTotal);
// console.log(total);

const shoppingCart =[
    {
        itemName:"js course",
        price: 2999
    },
    {
        itemName:"python course",
        price: 999
    },
    {
        itemName:"mobile dev course",
        price: 5999
    },
    {
        itemName:"data science course",
        price: 12999
    }
]
const priceToPay = shoppingCart.reduce((acc,item) => acc+item.price,0);
console.log(priceToPay);

