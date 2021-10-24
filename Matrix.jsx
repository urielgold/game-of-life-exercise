import React from 'react';
import classNames from 'classnames';

export default ({mat, showX}) => (
  <>
  {mat.map((row, i)=> 
    <div className='row'>
      {row.map((cell, j) => 
      <div className={classNames('cell', {active: mat[i][j]})}>
       {mat[i][j] && showX && 'x'}
      </div>)}
    </div>)
  }
  </>
)