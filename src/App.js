import React, {Component} from 'react';
import {Text, View, Button, TouchableOpacity, StyleSheet} from 'react-native';

import {createStore} from 'redux';
import CounterApp from './CounterApp';
import {Provider} from 'react-redux';

const initialState = {
  counter: 0,
};

//reducers
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREASE_COUNTER':
      return {counter: state.counter + 1};
    case 'DECREASE_COUNTER':
      return {counter: state.counter - 1};
  }
  return state;
};

const store = createStore(reducer);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <CounterApp />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
