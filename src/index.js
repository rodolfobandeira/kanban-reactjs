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
            description: 'Do task A',
            position: 1
          },
          {
            id: 2,
            description: 'Do task B',
            position: 2
          },
          {
            id: 3,
            description: 'Do task C',
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
            description: 'Doing task 4',
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
            description: 'Do done 1',
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

