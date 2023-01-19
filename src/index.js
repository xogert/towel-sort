module.exports = function towelSort(matrix) {
    if (matrix === undefined) return [];
    if (matrix.length === 0) return [];

    const sortedMatrix = [];

    for (let i = 0; i < matrix.length; i++) {
        if (i % 2 === 0) {
            for (let j = 0; j < matrix[i].length; j++) {
                sortedMatrix.push(matrix[i][j]);
            }
        }

        if (i % 2 === 1) {
            for (let j = matrix[i].length - 1; j >= 0; j--) {
                sortedMatrix.push(matrix[i][j]);
            }
        }
    }

    return sortedMatrix;
};
