import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './css/App.css';
import KanbanBoard from './components/KanbanBoard';


class App extends Component {
  state = {
    kanban_boards: [
      {
        id: 1,
        title: 'TO DO',
        items: [
          {
            id: 1,
            description: 'Task A',
            position: 1
          },
          {
            id: 2,
            description: 'Task B',
            position: 2
          },
          {
            id: 3,
            description: 'Task C',
            position: 3
          }
        ]
      },
      {
        id: 2,
        title: 'DOING',
        items: [
          {
            id: 4,
            description: 'Task D',
            position: 1
          }
        ]
      },
      {
        id: 3,
        title: 'DONE',
        items: [
          {
            id: 5,
            description: 'Task E',
            position: 1
          }
        ]
      }
    ]
  }

  render() {
    return (
      <div className="kanban">
        <KanbanBoard kanbanBoards={this.state.kanban_boards} />
      </div>
    );
  }
};

ReactDOM.render(<App />, document.querySelector("#root"));

