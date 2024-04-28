import React from 'react';
import "./expandedPanel.css";

function ExpandedPanel({ expanded }) {
    return (
        <div className={expanded ? "expanded-panel show" : "expanded-panel"}>
            <ul>
                <li className="announcement-item">1</li>
                <li className="announcement-item">2</li>
                <li className="announcement-item">3</li>
                <li className="announcement-item">1</li>
                <li className="announcement-item">2</li>
                <li className="announcement-item">3</li>
                <li className="announcement-item">1</li>
                <li className="announcement-item">2</li>
                <li className="announcement-item">3</li>
                <li className="announcement-item">1</li>   
                <li className="announcement-item">2</li>
                <li className="announcement-item">1</li>
                <li className="announcement-item">2</li>
                <li className="announcement-item">3</li>
                <li className="announcement-item">1</li>
                <li className="announcement-item">2</li>
                <li className="announcement-item">3</li>
                <li className="announcement-item">1</li>
                <li className="announcement-item">2</li>
                <li className="announcement-item">3</li>
                <li className="announcement-item">1</li>   
                <li className="announcement-item">2</li>
            </ul>
        </div>
    );
}

export default ExpandedPanel;
