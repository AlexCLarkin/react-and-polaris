import React from "react";
import Tabs from "./Tabs";

// POLARIS
import enTranslations from "@shopify/polaris/locales/en.json";
import {
  AppProvider,
  Page,
  Card,
  Link,
  List,
  Heading,
  Subheading,
  Thumbnail,
  Badge,
} from "@shopify/polaris";

class App extends React.Component {
  render() {
    return (
      <AppProvider i18n={enTranslations}>
        <div>
          <Tabs />
        </div>
      </AppProvider>
    );
  }
}

export default App;
