import {getNumOfNeighbors, getNextStatus, createBoard} from './util';

const board = [[true, false, false, false, true],
              [false, false, true, false, false],
              [false, true, false, true, false],
              [true, false, false, false, false],
              [false, false, true, false, true],
             ];

const testGetNumOfNeighbors = () => {
    //res === 0
    console.log('0:', getNumOfNeighbors(0,0, board));

    //res === 3
    console.log('3:',getNumOfNeighbors(3, 1, board));

    //res === 2
    console.log('2:',getNumOfNeighbors(2, 0, board));
} 

const testGetNextStatus = () => {
    //res === 0
    console.log('false:', getNextStatus(0,0, board));
    console.log('false:', getNextStatus(0,1, board));
    console.log('true:', getNextStatus(2,2, board));
    console.log('false:', getNextStatus(2,3, board));
} 

const testCreateBoard = () => {
  console.log(createBoard());
}

testGetNumOfNeighbors();
testGetNextStatus();
testCreateBoard();

