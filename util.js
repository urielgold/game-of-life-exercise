export const  getRange = (i, size) => {
    const res = {};
    res.from = i - 1 < 0 ? 0 : (i - 1);
    res.to = i + 1 === size ? (size - 1) : (i + 1);
    return res; 
  }

export const  getNumOfNeighbors  = (i, j, board, size) => {
    const rowRange = getRange(i, size);
    const colRange = getRange(j, size);
    
    let res = 0;
    for (let k = rowRange.from; k <= rowRange.to; k++) {
      for (let p = colRange.from; p <= colRange.to; p++) {
        if ((i !== k || j !== p) && board[k][p]) {
          res++;
      }
    }
  }
  return res;
 } 


export const getNextStatus = (i, j, board, size) => {
  const n = getNumOfNeighbors(i, j, board, size);
  if (board[i][j]) {
    return n >= 2 && n <= 3;
  } else {
      return n === 3;
  }
}

export const createBoard = (size = 5) => {
  const board = [];
  for (let i = 0; i < size; i++) {
    const rowData = []
    for (let j = 0; j < size; j++) {
      rowData.push(Math.random() > 0.5);
    }
    board.push(rowData)
  }
  return board;
}

export const getNextMat = (mat, size) => {
 const res = [];
  for (let i = 0; i < size; i++) {
    const rowData = []
    for (let j = 0; j < size; j++) {
      rowData.push(getNextStatus(i, j, mat, size));
    }
    res.push(rowData)
  }
  return res;
}