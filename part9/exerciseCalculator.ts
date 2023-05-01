interface result {
    periodLength: number;
    trainingDays: number;
    success: boolean;
    rating: number;
    ratingDescription:string;
    target: number;
    average: number;
}

const calculateExercises = (args:Array<number>,goal:number):result=>{

    const result = { periodLength: args.length,
        trainingDays: args.filter(d=>d!==0).length,
        success: args.reduce((p,c)=>p+c,0)/args.length==goal,
        rating: args.reduce((p,c)=>p+c,0)/args.length,
        ratingDescription: 'not too bad but could be better',
        target: goal,
        average: goal }

    return  result
}

console.log(calculateExercises([3, 0, 2, 4.5, 0, 3, 1],2));
