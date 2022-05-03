import React, { useCallback, useState } from "react";
import { Card, Stack } from "@shopify/polaris";

import AccordionItem from "./AccordionItem";
import TwoCards from "./TwoCards";

export default function Accordion() {
  return (
    <div style={{ height: "200px" }}>
      <Stack vertical>
        <Card>
          <AccordionItem />
          <AccordionItem />
          <AccordionItem />
          <AccordionItem />
        </Card>
        <TwoCards />
      </Stack>
    </div>
  );
}
