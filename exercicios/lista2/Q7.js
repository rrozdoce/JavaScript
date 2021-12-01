const func = (num, min, max, inclu) => {

    if(inclu === true){
        return true
    }else{
        if(num > min && num < max){
            return true
        }
        else{
            return false
        }

    }
     
}

console.log(func(10, 100, 50))
console.log(func(16, 100, 160))
console.log(func(3, 150, 3, true))