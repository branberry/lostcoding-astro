import { component, defineMarkdocConfig } from "@astrojs/markdoc/config";

export default defineMarkdocConfig({
  tags: {
    test: {
      render: component("./src/components/react/Test.tsx", "Test"),
    },
  },
});
