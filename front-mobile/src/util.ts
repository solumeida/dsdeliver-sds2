
export function formatPrice(price: number){  
  return `R\$${price.toFixed(2).replace('.',',')}`;
}


export function currencyFormat(num:number, local="en") {
 let simb ="$"
 let sep =","
 let dec= "."

 switch(local){
     case "pt-br" : simb="R$", sep=".", dec=","
     break
    
 }



  return simb + num.toFixed(2).replace('.','-').replace(/(\d)(?=(\d{3})+(?!\d))/g, `$1${sep}`).replace('-',dec)
}


//https://stackoverflow.com/questions/55556221/how-do-you-format-a-number-to-currency-when-using-react-native-expo