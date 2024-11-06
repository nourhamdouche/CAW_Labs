
function mean(scores) {
    if (!Array.isArray(scores) || scores.length === 0) {
        return 0; 
    }

    let sum = 0;
    for (let i = 0; i < scores.length; i++) {
        sum += scores[i];
    }
    
    return sum / scores.length;
}
//completing the code to export it 
module.exports =  mean ;
