// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(T) {
    // write your code in JavaScript (Node.js 8.9.4)
    let totalMatch = 0

    let matchedArray = []
    let sampleIndex = T.length - 1
    let sample = T[sampleIndex].split('').sort().join()
    

    for( let i = 0 ; i < T.length ; i ++){
        
        let newItem = T[i].split('').sort().join()
        //console.log(newItem)
        if(newItem === sample && i > 0 && matchedArray.length < 1){
            matchedArray.push(T[sampleIndex])
            matchedArray.push(T[i])
        }
        else if(newItem === sample){
            matchedArray.push(T[i])
        }
        else if (newItem !== sample && matchedArray.length < 1){
            sampleIndex = i
            sample = newItem

        }
        
    }

    let lMatches = []
    for(let i = 0 ; i < matchedArray.length ; i++){

       let current = matchedArray[i]
       

        let currentOA = current.split('')
        currentOA[0] = currentOA.splice(1 , 1 , currentOA[0])
        let currentOne= currentOA.join('')

        let currentTA = current.split('')
        currentTA[1] = currentTA.splice(2 , 1 , currentTA[1])
        let currentTwo= currentTA.join('')

        const currents = [current , currentOne , currentTwo]
        //console.log(currents , "currents")

        for(let c = 0 ; c < currents.length ; c++){
             let matchItem = 0
             for(let j = 0 ; j < matchedArray.length ; j++){
                    let main = matchedArray[j]
                    
                    let firstSwapArray = main.split('')
                    firstSwapArray[0] = firstSwapArray.splice(1 , 1 , firstSwapArray[0])
                    let firstSwap = firstSwapArray.join('')

                    let secondSwapArray = main.split('')
                    secondSwapArray[1] = secondSwapArray.splice(2 , 1 , secondSwapArray[1])
                    let secondSwap = secondSwapArray.join('')

                   // console.log(currents[c] ,main , firstSwap , secondSwap)
                    if(
                        currents[c] === main || 
                        currents[c] === firstSwap || 
                        currents[c] === secondSwap){
                        matchItem += 1 
                    }
         }
              lMatches.push(matchItem) 
        }

      

       

    }

    for(let i = 0 ; i < lMatches.length ; i++){
        if(lMatches[i] > totalMatch){
            totalMatch = lMatches[i]
        }
    }

    //console.log(matchedArray)
    return totalMatch;

    
}