import React from "react";
import CheckboxItem from "./CheckboxItem";
import RadioItem from "./RadioItem";

interface FilterSectionProps {
  title: string;
  items: { id: string; name: string; value: string; label: string }[];
  itemType: "checkbox" | "radio";
}

const FilterSection: React.FC<FilterSectionProps> = ({
  title,
  items,
  itemType,
}) => {
  return (
    <div className="mb-4">
      <h3 className="font-semibold mb-2">{title}</h3>
      {items.map((item) =>
        itemType === "checkbox" ? (
          <CheckboxItem
            key={item.id}
            id={item.id}
            name={item.name}
            value={item.value}
            label={item.label}
          />
        ) : (
          <RadioItem
            key={item.id}
            id={item.id}
            name={item.name}
            value={item.value}
            label={item.label}
          />
        )
      )}
    </div>
  );
};

export default FilterSection;
