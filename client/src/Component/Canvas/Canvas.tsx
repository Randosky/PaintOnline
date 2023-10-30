import React, {useEffect, useRef} from 'react';
import "../../Style/canvas.scss"
import {observer} from "mobx-react-lite";
import canvasStore from "../../Store/CanvasStore";
import toolStore from "../../Store/ToolStore";
import Brush from "../../Tools/Brush";

const Canvas: React.FC = observer(() => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        canvasStore.setCanvas(canvasRef.current)
        toolStore.setTool(new Brush(canvasRef.current))
    }, []);

    const mouseDownHandler = () => {
        canvasStore.pushToUndo(canvasRef.current?.toDataURL() || "")
    }

    return (
        <div className="canvas">
            <canvas ref={canvasRef}
                    onMouseDown={() => mouseDownHandler()}
                    width={window.visualViewport ? window.visualViewport.width : window.outerWidth}
                    height={window.visualViewport ? window.visualViewport.height - 80 : window.outerHeight}/>
        </div>
    );
});

export default Canvas;