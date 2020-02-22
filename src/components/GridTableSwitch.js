import React from 'react';
import {Link} from "react-router-dom";


const GridTableSwitch = ({toggle, layout}) =>
    <div>
        {
            layout === "grid" &&
            <Link to="/table">
                <button onClick={() => toggle()} className="fa fa-th float-right text-dark"/>
            </Link>
        }

        {
            layout === "table" &&
            <Link to="/grid">
                <button onClick={() => toggle()} className="fa fa-th float-right text-dark"/>
            </Link>
        }
    </div>;



export default GridTableSwitch;

