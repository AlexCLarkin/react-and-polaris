import React from "react";
import { Select } from "@shopify/polaris";

export default function SelectBox1() {
  const options = [
    { label: "Quebec", value: "Quebec" },
    { label: "London", value: "London" },
    { label: "New York", value: "New York" },
  ];

  return <Select label="Business loaction" options={options} />;
}
