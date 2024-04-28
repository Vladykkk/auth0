import { useState } from "react";
import RequestDetails from "../requestDetails/RequestDetails";
import "./expandedPanel.css";

const ExpandedPanel = () => {
  const [expanded, setExpanded] = useState(false);
  const [items, setItems] = useState([
    {
      title: "Help my Dog!",
      location: "Lviv",
      email: "email1@example.com",
      phone: "1234567890",
      time: new Date().toLocaleString(),
    },
    {
      title: "My car is broken!",
      location: "Kyiv",
      email: "email2@example.com",
      phone: "0987654321",
      time: new Date().toLocaleString(),
    },
    // Add more mock data as needed
  ]);
  const [itemName, setItemName] = useState("");
  const [location, setLocation] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [selectedItem, setSelectedItem] = useState(null);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  const addItem = () => {
    if (
      itemName.trim() !== "" &&
      location.trim() !== "" &&
      email.trim() !== "" &&
      phone.trim() !== ""
    ) {
      const newItem = {
        title: itemName.trim(),
        location: location.trim(),
        email: email.trim(),
        phone: phone.trim(),
        time: new Date().toLocaleString(), // Get current time
      };
      setItems([...items, newItem]);
      setItemName("");
      setLocation("");
      setEmail("");
      setPhone("");
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "itemName") {
      setItemName(value);
    } else if (name === "location") {
      setLocation(value);
    } else if (name === "email") {
      setEmail(value);
    } else if (name === "phone") {
      setPhone(value);
    }
  };

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  const handleCloseHelpRequests = () => {
    setItems(items.filter((item) => item !== selectedItem));
    setSelectedItem(null);
  };

  return (
    <>
      <button className="left-menu-button" onClick={toggleExpanded}></button>
      <div className={expanded ? "expanded-panel show" : "expanded-panel"}>
        <div className="form-container">
          <input
            type="text"
            name="itemName"
            value={itemName}
            onChange={handleInputChange}
            placeholder="What is your problem?"
          />
          <input
            type="text"
            name="location"
            value={location}
            onChange={handleInputChange}
            placeholder="Location"
          />
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleInputChange}
            placeholder="Email"
          />
          <input
            type="tel"
            name="phone"
            value={phone}
            onChange={handleInputChange}
            placeholder="Phone"
          />
          <button onClick={addItem}>+</button>
        </div>
        <ul>
          {items.map((item, index) => (
            <li
              className="announcement-item"
              key={index}
              onClick={() => handleItemClick(item)}
            >
              {item.title} - {item.time}
            </li>
          ))}
        </ul>
      </div>
      {selectedItem && (
        <RequestDetails
          title={selectedItem.title}
          time={selectedItem.time}
          location={selectedItem.location}
          email={selectedItem.email}
          phone={selectedItem.phone}
          onAgree={handleCloseHelpRequests}
        />
      )}
    </>
  );
};

export default ExpandedPanel;
