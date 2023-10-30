import React from 'react';
import "../../Style/bars.scss"
import toolStore from "../../Store/ToolStore";

const SettingBar: React.FC = () => {

    const checkLineWidth = (val: number) => {
        if (val < 100 && val > 1)
            toolStore.setLineWidth(val)
        else
            toolStore.setLineWidth(100)
    }

    return (
        <div className="settingBar">
            <label htmlFor="line-width" className="settingBar__label">
                <p>Толщина линии</p>
                <input type="number" min={1} max={100}
                       defaultValue={1} id="line-width"
                       onChange={(e) => checkLineWidth(Number(e.target.value))}/>
            </label>
            <label htmlFor="fillColor" className="settingBar__label settingBar__color">
                <p>Цвет заливки</p>
                <input type="color"
                       id="fillColor"
                       onChange={(e) => toolStore.setFillColor(e.target.value)}/>
            </label>
            <label htmlFor="strokeColor" className="settingBar__label settingBar__color">
                <p>Цвет обводки</p>
                <input type="color"
                       id="strokeColor"
                       onChange={(e) => toolStore.setStrokeColor(e.target.value)}/>
            </label>
        </div>
    );
};

export default SettingBar;
