import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Board from "./Board";

const BoardWrapper = () => (
  <DndProvider backend={HTML5Backend}>
    <Board />
  </DndProvider>
);

export default BoardWrapper;
