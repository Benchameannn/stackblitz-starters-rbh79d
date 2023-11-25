
// Import React and useState hook
import React, { useState } from "react";

// Define the action button component
function ActionButton(props) {
  // Define the state for the drop down menu visibility
  const [showDropDown, setShowDropDown] = useState(false);

  // Define the handler for the action button click
  const handleButtonClick = () => {
    // Toggle the drop down menu visibility
    setShowDropDown(!showDropDown);
  };

  // Return the JSX for the action button
  return (
    <div className="action-button" onClick={handleButtonClick}>
      <span className="action-button-text">{props.text}</span>
      <img className="action-button-photo" src={props.photo} alt={props.text} />
      {showDropDown && <DropDownMenu items={props.items} />}
    </div>
  );
}

// Define the drop down menu component
function DropDownMenu(props) {
  // Return the JSX for the drop down menu
  return (
    <ul className="drop-down-menu">
      {props.items.map((item, index) => (
        <MenuItem key={index} text={item.text} subItems={item.subItems} />
      ))}
    </ul>
  );
}

// Define the menu item component
function MenuItem(props) {
  // Define the state for the sub menu visibility
  const [showSubMenu, setShowSubMenu] = useState(false);

  // Define the handler for the menu item click
  const handleItemClick = () => {
    // Toggle the sub menu visibility
    setShowSubMenu(!showSubMenu);
  };

  // Return the JSX for the menu item
  return (
    <li className="menu-item" onClick={handleItemClick}>
      <span className="menu-item-text">{props.text}</span>
      {showSubMenu && <SubMenu items={props.subItems} />}
    </li>
  );
}

// Define the sub menu component
function SubMenu(props) {
  // Return the JSX for the sub menu
  return (
    <ul className="sub-menu">
      {props.items.map((item, index) => (
        <SubMenuItem key={index} text={item.text} />
      ))}
    </ul>
  );
}

// Define the sub menu item component
function SubMenuItem(props) {
  // Return the JSX for the sub menu item
  return (
    <li className="sub-menu-item">
      <span className="sub-menu-item-text">{props.text}</span>
    </li>
  );
}

// Export the action button component
export default ActionButton;



