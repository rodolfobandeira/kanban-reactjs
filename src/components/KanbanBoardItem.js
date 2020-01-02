import React from 'react';

const KanbanBoardItem = props => {
  const kanbanBoardItems = props.kanbanBoardItems.map((kanbanBoardItem, i) => {
    return (
      <div className="kanban-board-item" key={i}>
        {kanbanBoardItem.description}
      </div>
    );
  });

  return (
    kanbanBoardItems
  );
};

export default KanbanBoardItem;
