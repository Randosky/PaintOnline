import React from 'react';
import Canvas from "../Canvas/Canvas";
import ToolBar from "../Toolbar/ToolBar";
import SettingBar from "../SettingBar/SettingBar";
import canvasStore from "../../Store/CanvasStore";

const Homepage: React.FC = () => {

    function handleUndoRedo(e: React.KeyboardEvent<HTMLDivElement>): void {
        if (e.ctrlKey && e.key === "z") {
            if (e.altKey)
                canvasStore.redo()
            else
                canvasStore.undo()
        }
    }

    return (
        <div className="appRoot"
             tabIndex={-1}
             id="appRoot"
             onKeyDown={(e) => handleUndoRedo(e)}>
            <ToolBar/>
            <SettingBar/>
            <Canvas/>
        </div>
    );
};

export default Homepage;
