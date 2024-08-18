const shoe={
    brand: "converse",
    laces: true,
    velcro: false,
    color: "green",
    price: 70,
    activitie: "walking",
    size: 11,
    istied: true,

    tie () { this.istied=false}
}
const shoe2={
    brand: "converse",
    laces: true,
    velcro: false,
    color: "green",
    price: 70,
    activitie: "walking",
    size: 7,
}

const shoebox= [shoe,shoe2];

for (let i=0;i<shoebox.length;i++){
    console.table(shoebox[i]);
    if(shoebox[i].size < 9){
        console.log("correct shoe")
    }
}


//   console.table(shoebox);
console.table(shoe);
shoe.tie();
console.table(shoe)