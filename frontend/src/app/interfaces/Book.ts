
export interface Book {
    id : number;
    designation : string;
    price : number;
    quantity : number;
    publisher : string;
    level : string;
    section : string;
    author : string;
//on ne modifie pas la quantité du produit 
//c'est le stock qui peut etre modifié par un staff
//meme le prix ne doit pas pouvoir être modifié 
}