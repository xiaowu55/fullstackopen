const calculateBmi = (h:number,w:number):string =>{
    const bmi = w/(h/100*h/100)
    console.log(bmi);
    
    if(bmi<18.5){return 'low'}
    else if(18.5<bmi||bmi<23.9){return 'Normal (healthy weight)'}
    else{return 'big'}
}

console.log(calculateBmi(180, 74))