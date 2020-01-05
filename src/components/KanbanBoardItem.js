import React from 'react';

const KanbanBoardItem = props => {
  const dragStart = e => {
    const target = e.target;

    e.dataTransfer.setData('kanbanBoardItemId', target.id);
    target.style.opacity = "0.5";
  }

  const kanbanBoardItems = props.kanbanBoardItems.map((kanbanBoardItem, i) => {
    return (
      <div
        className="kanban-board-item"
        key={`kanban_board_item_key_${i}`}
        id={`kanban_board_item_id_${i}`}
        draggable={props.draggable}
        onDragStart={dragStart}
        onDragEnd={props.dragEnd}
      >
        {kanbanBoardItem.description}
      </div>
    );
  });

  return (
    kanbanBoardItems
  );
};

export default KanbanBoardItem;
