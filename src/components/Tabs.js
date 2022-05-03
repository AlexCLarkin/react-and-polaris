import React, { useCallback, useState } from "react";
import { Tabs } from "@shopify/polaris";
import FirstTabContent from "./FirstTabContent";
import Accordion from "./Accordion";
import FirstTabContent2 from "./FirstTabContent2";
import TwoCards from "./TwoCards";

export default function TabsExample() {
  const [selected, setSelected] = useState(0);

  const handleTabChange = useCallback(
    (selectedTabIndex) => setSelected(selectedTabIndex),
    []
  );

  const tabs = [
    {
      id: "tab-1",
      content: "Tab 1",
    },
    {
      id: "tab-2",
      content: "Tab 2",
    },
  ];

  if (selected == 0) {
    return (
      <Tabs tabs={tabs} selected={selected} onSelect={handleTabChange}>
        <div>
          <FirstTabContent />
        </div>
        <div className="text-cards">
          <FirstTabContent2 />
        </div>
      </Tabs>
    );
  } else {
    return (
      <Tabs tabs={tabs} selected={selected} onSelect={handleTabChange}>
        <div>
          <Accordion />
        </div>
      </Tabs>
    );
  }
}
