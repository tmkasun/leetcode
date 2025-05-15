import { assert } from "./Assert.js";

/**
 * This is a relay module or usually called a "barrel module"
 * Source : https://developer.mozilla.org/en-US/docs/web/javascript/reference/statements/export#re-exporting_aggregating
 */

export const Initi = () => {
  console.clear();
  assert.reset();
};

export * from "./Assert.js";
export * from "./Graph.js";
export * from "./Grid.js";
export * from "./List.js";
export * from "./Tree.js";
