import './Dropdown.css';
import React, { useState } from 'react';
import { 
  MDBDropdown, 
  MDBDropdownToggle, 
  MDBDropdownMenu, 
  MDBDropdownItem, 
  MDBCheckbox 
} from 'mdb-react-ui-kit';

const Dropdown = ({ label, options }) => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleSelect = (value, event) => {
    event.preventDefault(); // Prevent the default behavior to keep the dropdown open
    setSelectedOptions(prev =>
      prev.includes(value) ? prev.filter(item => item !== value) : [...prev, value]
    );
  };

  return (
    <div className="custom-select">
      <div className='label-head'>
        <label >{label}</label>
      </div>
      <MDBDropdown className='dropdown-parent'>
        <MDBDropdownToggle tag="button" className="btn btn-primary custom">
          {selectedOptions.length > 0 ? selectedOptions.join(', ') : label}
          <i className="bi bi-chevron-down down"></i>
        </MDBDropdownToggle>
        <MDBDropdownMenu className='dropdown-menu'>
          {options.map((option, index) => (
            <MDBDropdownItem 
              key={index} 
              className="dropdown-item"
              onClick={(e) => handleSelect(option.text, e)} // Prevent default behavior
            >
              <MDBCheckbox 
                label={option.text} 
                checked={selectedOptions.includes(option.text)}
                onChange={(e) => handleSelect(option.text, e)}
                className='checkbox'
              />
            </MDBDropdownItem>
          ))}
        </MDBDropdownMenu>
      </MDBDropdown>
    </div>
  );
};

export default Dropdown;
