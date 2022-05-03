import React, { useCallback, useState } from "react";
import { Select } from "@shopify/polaris";

export default function SelectBox2() {
  const options = [
    { label: "Store Name 1", value: "Store Name 1" },
    { label: "Store Name 2", value: "Store Name 2" },
    { label: "Store Name 3", value: "Store Name 3" },
  ];

  return <Select label="Store Name" options={options} />;
}
