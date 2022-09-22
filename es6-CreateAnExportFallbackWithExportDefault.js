//es6-CreateAnExportFallbackWithExportDefault.js

//The following function should be the fallback value for the module. Please add the necessary code to do so.

/**
 * function subtract(x, y) {
  return x - y;
}
 */

export default function subtract(x, y) {
    return x - y;
  }

  /**
   *Since export default is used to declare a fallback value for a module or file, you can only have one value be a default export in each module or file. Additionally, you cannot use export default with var, let, or const
   */