import React from "react";

interface RadioItemProps {
  id: string;
  name: string;
  value: string;
  label: string;
}

const RadioItem: React.FC<RadioItemProps> = ({ id, name, value, label }) => {
  return (
    <div className="flex items-center mb-2">
      <input
        type="radio"
        id={id}
        name={name}
        value={value}
        style={{
          accentColor: "#EE4266", // Cor rosa
          width: "16px",
          height: "16px",
        }}
        className="form-radio custom-radio"
      />
      <label htmlFor={id} className="ml-2">
        {label}
      </label>
    </div>
  );
};

export default RadioItem;
