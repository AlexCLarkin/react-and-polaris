import React from "react";
import { Card, EmptyState } from "@shopify/polaris";
import pic from "../images/emptystatecat2.png";

const FirstTabContent = () => {
  return (
    <Card>
      <div>
        <Card.Section>
          <EmptyState
            image={pic}
            heading="No Results Found"
            action={{ content: "Reload Page" }}
          >
            <p>Please Reload The Page.</p>
          </EmptyState>
        </Card.Section>
      </div>
    </Card>
  );
};

export default FirstTabContent;
