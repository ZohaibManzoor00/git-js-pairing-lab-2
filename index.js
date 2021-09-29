let OneHundredToFive = () => { for( let i = 100; i >= 5; i--) console.log(i) }

//OneHundredToFive()


let absoluteValue = (num) => Math.abs(num)
//console.log(absoluteValue("hello"))

let multiplesOfFourOrSeven = () => {
    for(let i = 1; i <= 100; i++){
        if(i % 4 === 0 || i % 7 === 0){
            console.log(i)
        }
    }
}

//multiplesOfFourOrSeven()

let square = (x) => {
    if(Math.sqrt(x) % 1 == 0){
        return Math.sqrt(x);
    } else return Math.pow(x, 2)
    }
    console.log(square(36))
    
       