import React, { Component } from 'react';
import { render } from 'react-dom';
import { getNextStatus, createBoard, getNextMat } from './util';
import Matrix from './Matrix';
import './style.scss';

class App extends React.PureComponent {
  constructor() {
    super();
    this.size = 100;
    this.exampleSize = 5;

    this.state = {
      game: createBoard(this.size),
    };

    this.example = createBoard(this.exampleSize);
    setInterval(
      () => this.setState({ game: getNextMat(this.state.game, this.size) }),
      100
    );
  }

  render() {
    return (
      <div className="game-of-life">
        <div className="example">
          <div className="left">
            before:
            <Matrix mat={this.example} showX={true} />
          </div>
          {'=>'}
          <div className="right">
            after:
            {this.example.map((row, i) => (
              <div className="row">
                {row.map((cell, j) => (
                  <div className="cell">
                    {getNextStatus(i, j, this.example, this.exampleSize) && 'x'}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
        <div className="game">
          <Matrix mat={this.state.game} />
        </div>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
