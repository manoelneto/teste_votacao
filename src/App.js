import _ from 'lodash';
import React, { Component } from 'react';
import { QUESTIONS, getPercentResult } from 'data';

class App extends Component {
  state = {}

  checked = (key, type) => {
    this.state[key] == type;
  }

  onChange = (key, type) => {
    this.setState({[key]: type});
  }

  render() {
    return (
      <div className="App">
        <div>
          Parcial:&nbsp;

          {
            _.sortBy(
              _.toPairs(getPercentResult(this.state)),
              item => item[1]
            ).reverse().map(item => {
              const [candidatoNick, percent] = item;

              return <span key={candidatoNick}>
                {candidatoNick} {(percent * 100).toFixed(2)}&nbsp;
              </span>
            })
          }
        </div>

        {
          QUESTIONS.map(question => (
            <div key={question.key} style={{padding: "20px"}}>
              <div>
                {question.name}
              </div>

              <input type="radio" name={question.key} value={-1} checked={this.checked(question.key, -1)} onChange={() => this.onChange(question.key, -1)}/> Não
              <input type="radio" name={question.key} value={1} checked={this.checked(question.key, 1)} onChange={() => this.onChange(question.key, 1)}/> Sim
            </div>
          ))
        }
      </div>
    );
  }
}

export default App;
