var testOriginal = [
    [0,0,0,1],
    [3,4,5,1],
    [3,7,6,1],
    [3,2,2,2]
];

for(let i = 0; i < testOriginal.length; i++)
{
    console.log(testOriginal[i].join(","));
}

function rotateMatrix(matrix = [[]]) {
    if(matrix.length < 1 || matrix.length != matrix[0].length) return false;

    const n = matrix.length;

    for(let layer = 0; layer < n / 2; layer++) {
        //const first = layer;
        const last = n - 1 - layer;

        for(let i = layer; i < last; i++) {
            const offset = i - layer;

            const top = matrix[layer][i];
            matrix[layer][i] = matrix[last-offset][layer];//left -> top
            matrix[last-offset][layer] = matrix[last][last-offset];//botton -> left
            matrix[last][last-offset] = matrix[i][last];//right -> bottom
            matrix[i][last] = top; //top -> right

        }    
    }

    return true;
}
console.log("--------------------------------------");
const testFinal = rotateMatrix(testOriginal);
for(let i = 0; i < testOriginal.length; i++)
{
    console.log(testOriginal[i].join(","));
}