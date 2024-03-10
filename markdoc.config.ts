import { component, defineMarkdocConfig } from "@astrojs/markdoc/config";

export default defineMarkdocConfig({
  tags: {
    card: {
      render: component("./src/components/Card.astro"),
      attributes: {
        title: { type: "String" },
        body: { type: "String" },
        href: { type: "String" },
      },
    },
    test: {
      render: component("./src/components/react/Test.tsx", "Test"),
    },
  },
});
