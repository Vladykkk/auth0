import { useState } from "react";

import "./expandedPanel.css";

const ExpandedPanel = () => {
  const [expanded, setExpanded] = useState(false);
  const [items, setItems] = useState([]);
  const [itemName, setItemName] = useState("");

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  const addItem = () => {
    if (itemName.trim() !== "") {
      const newItem = itemName.trim();
      setItems([...items, newItem]);
      setItemName("");
    }
  };

  const handleInputChange = (e) => {
    setItemName(e.target.value);
  };

  return (
    <>
      <button className="left-menu-button" onClick={toggleExpanded}></button>
      <div className={expanded ? "expanded-panel show" : "expanded-panel"}>
        <div className="form-container">
          <input
            type="text"
            value={itemName}
            onChange={handleInputChange}
            placeholder="What is your problem?"
          />
          <button onClick={addItem}>+</button>
        </div>
        <ul>
          <a href="#">
            {items.map((item, index) => (
              <li className="announcement-item" key={index}>
                {item}
              </li>
            ))}
          </a>
        </ul>
      </div>
    </>
  );
};

export default ExpandedPanel;
