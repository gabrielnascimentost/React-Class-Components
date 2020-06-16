import React, { Component, Fragment } from 'react';
import Counter from './components/Counter/Counter';
import Counter2 from './components/Counter/Counter2';
import Band from './components/Band';

export default class App extends Component {
  
  constructor() {
    super();
    this.state = {
      currentCounter: 3,
      steps: 0
    };
  }

  handleCount = (clickType) => {
    const {currentCounter, steps} = this.state;
    this.setState({
        currentCounter: 
        clickType === '+' ? currentCounter + 1 : currentCounter - 1,
        steps: steps + 1,
    });
  }
  
  render() {
    const {currentCounter, steps} = this.state;
    return (
      <Fragment>
        <h3>Band</h3>
        <Band />

        <h3>Counter</h3>
        <p>Cada componente tem um estado separado - incremento e decremento funciona isoladamente em cada elemento.</p>
        <Counter />
        <Counter />
        <Counter />


        <h3>Counter 2</h3>
        <p>Cada elemento tem um estado compartilhado - incremento e decremento de cada um tem um valor para todos os elementos.</p>
        <Counter2 onCount={this.handleCount} countValue={currentCounter} currentStep={steps}/>
        <Counter2 onCount={this.handleCount} countValue={currentCounter} currentStep={steps}/>
        <Counter2 onCount={this.handleCount} countValue={currentCounter} currentStep={steps}/>
      </Fragment>
    );
  }
}
