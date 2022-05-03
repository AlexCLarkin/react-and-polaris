import React, { useCallback, useState } from "react";
import { ChoiceList } from "@shopify/polaris";

export default function SingleChoiceListExample() {
  const [selected, setSelected] = useState(["hidden"]);

  const handleChange = useCallback((value) => setSelected(value), []);

  return (
    <ChoiceList
      title="Company name"
      choices={[
        { label: "Hidden", value: "hidden" },
        { label: "Optional", value: "optional" },
        { label: "Required", value: "required" },
      ]}
      selected={selected}
      onChange={handleChange}
    />
  );
}
