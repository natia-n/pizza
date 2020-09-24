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

function random(a, b){
    return Math.floor(Math.random() * (b-a)+a);
};

let x=random(0, pizzas.length); //მასივის შემთხვევითი ინდექსი

let a=new Date(); // დრო შეკვეთის დაწყებამდე

appendStrong("თქვენი პიცა ("+ pizzas[x].name+") მზადდება");

setTimeout(() => {
    appendStrong("თქვენი პიცა გზაშია");

    
    setTimeout(() => {
        appendStrong("თქვენი პიცა ადგილზეა, ფასი - " + pizzas[x].price , "ლარი");
        
        let b = new Date(); // დრო შეკვეთის დასრულებისას
        let shekvetisDro=(b - a);
    
        appendStrong("შეკვეთის დრო: " + shekvetisDro / 1000, "წამი");
    }, 5000);
    
}, 2000);

function appendStrong(text){
    let strong=document.createElement("strong");
    strong.textContent = text;

    let status = document.getElementById("status");
    status.appendChild(strong);
    
    let br=document.createElement("br");
    status.appendChild(br);
}

