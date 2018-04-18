import React from 'react';
import actions from '../actions/index';
import counterStore from '../stores/counterStore';

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      // Your implementation here.
      counter: counterStore.getState()
    };

  }
  componentDidMount() {
    // We store a reference to the added event listener.
    this.removeListener = counterStore.addListener((counter) => {
      this.setState({counter});
    });
  }
  componentWillUnmount() {
    // Destroy the listener when the component unmounts.
    this.removeListener();
  }

  handleDecrement(ev){
    ev.preventDefault();
    actions.decrement();
  }

  handleIncrement(ev){
    ev.preventDefault();
    actions.increment();
  }

  render () {
    return (
      <div className='app'>
        <h1 className='counter'>{this.state.counter}</h1>
        <div className='actions'>
          <button className='decrement' onClick={this.handleDecrement}>
            -
          </button>
          <button className='increment' onClick={this.handleIncrement}>
            +
          </button>
        </div>
      </div>
    );
  }
}

export default App;
