import isEqual from "lodash.isequal";
export const assert = (() => {
  let testIndex = 0;
  const asserter = (real, expected) => {
    testIndex++;
    isEqual(real, expected)
      ? console.info(
          `Test ${testIndex} : ✅ Passed: Expected ${expected} Received ${real}`
        )
      : console.error(
          `Test ${testIndex} : ❗Failed: Expected ${expected} Received ${real}`
        );
  };
  asserter.reset = () => {
    testIndex = 0;
  };
  return asserter;
})();
