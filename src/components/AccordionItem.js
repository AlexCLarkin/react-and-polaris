import React, { useCallback, useState } from "react";
import {
  Button,
  Collapsible,
  Layout,
  Link,
  TextContainer,
} from "@shopify/polaris";
import "./styles.css";

const AccordionItem = () => {
  const [open, setOpen] = useState(true);

  const handleToggle = useCallback(() => setOpen((open) => !open), []);
  return (
    <div className="AccItem">
      <Layout>
        <Layout.Section>
          <TextContainer>
            <p>Text</p>
          </TextContainer>
        </Layout.Section>

        <Button
          onClick={handleToggle}
          ariaExpanded={open}
          ariaControls="basic-collapsible"
        >
          Toggle
        </Button>
      </Layout>

      <Collapsible
        open={open}
        id="basic-collapsible"
        transition={{ duration: "500ms", timingFunction: "ease-in-out" }}
        expandOnPrint
      >
        <TextContainer>
          <p>
            Your mailing list lets you contact customers or visitors who have
            shown an interest in your store. Reach out to them with exclusive
            offers or updates about your products.
          </p>
          <Link url="#">Test link</Link>
        </TextContainer>
      </Collapsible>
    </div>
  );
};

export default AccordionItem;
