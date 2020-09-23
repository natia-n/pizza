const pizzas=[
    {
        name: "პეპერონი",
        price: 20
    }, 
    {
        name: "მარგარიტა",
        price: 15
    },
    {
        name: "კომბინირებული",
        price: 22
    }
];

function random(){
    return Math.floor(Math.random() * pizzas.length);
};

let x=random(); //მასივის შემთხვევითი ინდექსი

let a=new Date(); // დრო შეკვეთის დაწყებამდე

console.log("თქვენი პიცა ("+ pizzas[x].name+") მზადდება");

setTimeout(() => {
    console.log("თქვენი პიცა გზაშია");

    
    setTimeout(() => {
        console.log("თქვენი პიცა ადგილზეა, ფასი - " + pizzas[x].price , "ლარი");
        
        let b = new Date(); // დრო შეკვეთის დასრულებისას
        let shekvetisDro=(b - a);
    
        console.log ("შეკვეთის დრო: " + shekvetisDro / 1000, "წამი");
    }, 5000);
    
}, 2000);

