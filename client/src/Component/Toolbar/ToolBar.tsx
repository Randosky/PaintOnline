import React from 'react';
import "../../Style/bars.scss"
import toolStore from "../../Store/ToolStore";
import Brush from "../../Tools/Brush";
import canvasStore from "../../Store/CanvasStore";
import Rect from "../../Tools/Rect";
import Circle from "../../Tools/Circle";
import Eraser from "../../Tools/Eraser";
import Line from "../../Tools/Line";

const ToolBar: React.FC = () => {
    return (
        <div className="toolbar">
            <ul className="toolbar__images">
                <li className="toolbar-images__item">
                    <button className="toolbar-item__button"
                            onClick={() => toolStore.setTool(new Brush(canvasStore.canvas))}>
                        <img src="/images/brush.svg" alt="brush"/>
                    </button>
                </li>
                <li className="toolbar-images__item">
                    <button className="toolbar-item__button"
                            onClick={() => toolStore.setTool(new Rect(canvasStore.canvas))}>
                        <img src="/images/rect.svg" alt="rect"/>
                    </button>
                </li>
                <li className="toolbar-images__item">
                    <button className="toolbar-item__button"
                            onClick={() => toolStore.setTool(new Circle(canvasStore.canvas))}>
                        <img src="/images/circle.svg" alt="circle"/>
                    </button>
                </li>
                <li className="toolbar-images__item">
                    <button className="toolbar-item__button"
                            onClick={() => toolStore.setTool(new Eraser(canvasStore.canvas))}>
                        <img src="/images/eraser.svg" alt="eraser"/>
                    </button>
                </li>
                <li className="toolbar-images__item">
                    <button className="toolbar-item__button"
                            onClick={() => toolStore.setTool(new Line(canvasStore.canvas))}>
                        <img src="/images/line.svg" alt="line"/>
                    </button>
                </li>
            </ul>
            <ul className="toolbar__images">
                <li className="toolbar-images__item">
                    <button className="toolbar-item__button"
                            onClick={() => canvasStore.undo()}>
                        <img src="/images/undo.svg" alt="undo"/>
                    </button>
                </li>
                <li className="toolbar-images__item">
                    <button className="toolbar-item__button"
                            onClick={() => canvasStore.redo()}>
                        <img src="/images/redo.svg" alt="redo"/>
                    </button>
                </li>
                <li className="toolbar-images__item">
                    <button className="toolbar-item__button">
                        <img src="/images/save.svg" alt="save"/>
                    </button>
                </li>
            </ul>
        </div>
    );
};

export default ToolBar;
