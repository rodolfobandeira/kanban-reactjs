import React from 'react';
import KanbanBoardItem from './KanbanBoardItem';

const KanbanBoard = props => {
  const dragOver = e => {
    e.preventDefault();
    e.target.style = 'cursor: grab';
  }

  const drop = e => {
    const kanbanBoardItemId = e.dataTransfer.getData('kanbanBoardItemId');
    const kanbanBoardItem = document.getElementById(kanbanBoardItemId);
    kanbanBoardItem.style.display = 'block';
    kanbanBoardItem.style.cursor = 'default';

    if (e.target.className === "kanban-board") {
      e.target.appendChild(kanbanBoardItem);
    } else if (e.target.className === "kanban-board-item") {
      e.target.parentNode.appendChild(kanbanBoardItem);
    }
  }

  const dragEnd = e => {
    e.target.style.opacity = "1";
    e.target.style.cursor = 'default';
  }

  const kanbanBoards = props.kanbanBoards.map((kanbanBoard, i) => {
    return (
      <div
        className="kanban-board"
        key={`kanban_board_key_${i}`}
        id={`kanban_board_id_${i}`}
        onDrop={drop}
        onDragOver={dragOver}
      >
        <div className="kanban-board-title">{kanbanBoard.title}</div>
        <div id="kanban-board-content">
          <KanbanBoardItem
            kanbanBoardItems={kanbanBoard.items}
            draggable="true"
            dragEnd={dragEnd}
          />
        </div>
      </div>
    );
  });

  return (
    kanbanBoards
  );
};

export default KanbanBoard;
