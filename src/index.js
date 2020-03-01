
// You should implement your task here.

module.exports = function towelSort(matrix = []) {
    return matrix.map((element, index)=> (index-1)%2? element : element.reverse()).flat();
}
