import React from 'react';
import KanbanBoardItem from './KanbanBoardItem';
import { DndProvider } from 'react-dnd';
import Backend from 'react-dnd-html5-backend';
/*
 * Drag and Drop Library:
 * https://codesandbox.io/s/github/react-dnd/react-dnd/tree/gh-pages/examples_hooks_js/04-sortable/simple?from-embed
 */

const KanbanBoard = props => {
  const kanbanBoards = props.kanbanBoards.map((kanbanBoard, i) => {
    return (
      <div className="kanban-board" key={i}>
        <DndProvider backend={Backend}>
          <div className="kanban-board-title">{kanbanBoard.title}</div>
          <KanbanBoardItem kanbanBoardItems={kanbanBoard.items} />
        </DndProvider>
      </div>
    );
  });

  return (
    kanbanBoards
  );
};

export default KanbanBoard;
