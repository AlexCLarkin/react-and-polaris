import React, { useCallback, useState } from "react";
import { ChoiceList } from "@shopify/polaris";

export default function SingleChoiceListExample() {
  const [selected, setSelected] = useState(["hidden"]);

  const handleChange = useCallback((value) => setSelected(value), []);

  return (
    <ChoiceList
      choices={[
        { label: "Billed Monthly: $329.00/month", value: "Billed Monthly" },
        { label: "Billed Quarterly: $269.00/month", value: "Billed Quarterly" },
        {
          label: "Billed Semi-Annually: $239.00/month",
          value: "Billed Semi-Annually",
        },
        { label: "Billed Annually: $199.00/month", value: "Billed Annually" },
      ]}
      selected={selected}
      onChange={handleChange}
    />
  );
}
