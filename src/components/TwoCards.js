import React from "react";
import {
  Card,
  Layout,
  TextField,
  Button,
  Tooltip,
  ChoiceList,
  Heading,
} from "@shopify/polaris";
import "./styles.css";
import SelectBox1 from "./SelectBox1";
import SelectBox2 from "./SelectBox2";
import pic1 from "../images/rightcardimg.png";
import BillingFrequency from "./BillingFrequency";

const TwoCards = () => {
  return (
    <div className="tab-cards2">
      <Layout className="ui grid">
        <Layout.Section oneHalf>
          <Card>
            <div className="left-card2">
              <SelectBox1 />
              <br />
              <SelectBox2 />
              <br />
              <TextField label="Name On Card" />
              <br />
              <TextField label="Card Number" />
              <br />
              <div className="ui grid">
                <TextField label="Expiration" /> <TextField label="CVC/CVV" />
              </div>
              <br />
              <br />
              <div>
                <Tooltip active content="Complete Order">
                  <Button fullWidth>Complete Order</Button>
                </Tooltip>
              </div>
              <br />
            </div>
          </Card>
        </Layout.Section>
        <Layout.Section oneHalf className="layout-right2">
          <Card>
            <div className="right-card2">
              <img src={pic1} className="img" />
              <BillingFrequency />
              <br />
              <TextField
                label="Discount Code"
                connectedRight={<Button>Apply</Button>}
              />
              <br />
              <div>
                <p>Subtotal: $2388.00</p>
                <p>Taxes:</p>
                <p>PST: $238.20</p>
                <p>GST: $119.40</p>
              </div>
              <br />
              <div>
                <Heading>Total:</Heading>
                <p>$2745.60</p>
                <p>
                  Your subscription will automatically renew on: 27th December
                  2019
                </p>
                <br />
              </div>
            </div>
          </Card>
        </Layout.Section>
      </Layout>
    </div>
  );
};

export default TwoCards;
