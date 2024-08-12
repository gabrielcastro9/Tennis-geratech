import React from "react";
import "./styles.css";
interface CheckboxItemProps {
  id: string;
  name: string;
  value: string;
  label: string;
}

const CheckboxItem: React.FC<CheckboxItemProps> = ({
  id,
  name,
  value,
  label,
}) => {
  return (
    <div className="flex items-center mb-2">
      <input
        type="checkbox"
        id={id}
        name={name}
        value={value}
        style={{
          accentColor: "#C92071",
        }}
        className="form-checkbox custom-checkbox h-4 w-4"
      />
      <label htmlFor={id} className="ml-2">
        {label}
      </label>
    </div>
  );
};

export default CheckboxItem;
