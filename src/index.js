import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { initialData } from './initial-data';
import Column from './column';

class App extends Component {
  state = initialData;

 

  render() {
    console.log('initialData ', initialData);
    return this.state.columnOrder.map(columnId => {
      const column =this.state.columns[columnId];
      const tasks = column.taskIds.map(taskId => this.state.tasks[taskId]);

      return <Column key={column.id} column={column} tasks={tasks} />;
    });
  }
}

ReactDOM.render(<App />, document.getElementById('root'));


