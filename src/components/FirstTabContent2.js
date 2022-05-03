import React from "react";
import "./styles.css";
import { Card, Heading, Layout } from "@shopify/polaris";

const FirstTabContent2 = () => {
  return (
    <div className="tab-cards">
      <Layout className="ui grid">
        <Layout.Section oneHalf>
          <div className="left-card">
            <Heading>Random text</Heading>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac
              mi a elit semper dignissim at quis libero. Morbi varius libero
              turpis, non tristique velit tristique at. Pellentesque efficitur
              augue ac imperdiet condimentum. Integer gravida lobortis tortor
              quis facilisis. Praesent nisl leo, elementum id dapibus in,
              fringilla ut felis. Morbi.
            </p>
          </div>
        </Layout.Section>
        <Layout.Section oneHalf className="layout-right">
          <Card>
            <div className="right-card">
              <Heading>More Random Text</Heading>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                ac mi a elit semper dignissim at quis libero. Morbi varius
                libero turpis, non tristique velit tristique at. Pellentesque
                efficitur augue ac imperdiet condimentum. Integer gravida
                lobortis tortor quis facilisis. Praesent nisl leo, elementum id
                dapibus in, fringilla ut felis. Morbi.
              </p>
            </div>
          </Card>
        </Layout.Section>
      </Layout>
    </div>
  );
};

export default FirstTabContent2;
