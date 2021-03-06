/**
 * DO NOT EDIT
 *
 * This file was automatically generated by
 *   https://github.com/Polymer/tools/tree/master/packages/gen-typescript-declarations
 *
 * To modify these typings, edit the source file(s):
 *   lib/utils/style-gather.js
 */


// tslint:disable:variable-name Describing an API that's defined elsewhere.

declare module 'goog:polymer.polymer.lib.utils.styleGather' {

  import {DomModule} from 'goog:polymer.polymer.lib.elements.domModule'; // from //third_party/javascript/polymer/v2/polymer

  import {resolveCss} from 'goog:polymer.polymer.lib.utils.resolveUrl'; // from //third_party/javascript/polymer/v2/polymer

  export {stylesFromModules};


  /**
   * Returns a list of <style> elements in a space-separated list of `dom-module`s.
   *
   * @returns Array of contained <style> elements
   */
  function stylesFromModules(moduleIds: string): HTMLStyleElement[];

  export {stylesFromModule};


  /**
   * Returns a list of <style> elements in a given `dom-module`.
   * Styles in a `dom-module` can come either from `<style>`s within the
   * first `<template>`, or else from one or more
   * `<link rel="import" type="css">` links outside the template.
   *
   * @returns Array of contained styles.
   */
  function stylesFromModule(moduleId: string): HTMLStyleElement[];

  export {stylesFromTemplate};


  /**
   * Returns the `<style>` elements within a given template.
   *
   * @returns Array of styles
   */
  function stylesFromTemplate(template: HTMLTemplateElement, baseURI: string): HTMLStyleElement[];

  export {stylesFromModuleImports};


  /**
   * Returns a list of <style> elements  from stylesheets loaded via `<link rel="import" type="css">` links within the specified `dom-module`.
   *
   * @returns Array of contained styles.
   */
  function stylesFromModuleImports(moduleId: string): HTMLStyleElement[];

  export {cssFromModules};


  /**
   * Returns CSS text of styles in a space-separated list of `dom-module`s.
   * Note: This method is deprecated, use `stylesFromModules` instead.
   *
   * @returns Concatenated CSS content from specified `dom-module`s
   */
  function cssFromModules(moduleIds: string): string;

  export {cssFromModule};


  /**
   * Returns CSS text of styles in a given `dom-module`.  CSS in a `dom-module`
   * can come either from `<style>`s within the first `<template>`, or else
   * from one or more `<link rel="import" type="css">` links outside the
   * template.
   *
   * Any `<styles>` processed are removed from their original location.
   * Note: This method is deprecated, use `styleFromModule` instead.
   *
   * @returns Concatenated CSS content from specified `dom-module`
   */
  function cssFromModule(moduleId: string): string;

  export {cssFromTemplate};


  /**
   * Returns CSS text of `<styles>` within a given template.
   *
   * Any `<styles>` processed are removed from their original location.
   * Note: This method is deprecated, use `styleFromTemplate` instead.
   *
   * @returns Concatenated CSS content from specified template
   */
  function cssFromTemplate(template: HTMLTemplateElement, baseURI: string): string;

  export {cssFromModuleImports};


  /**
   * Returns CSS text from stylesheets loaded via `<link rel="import" type="css">`
   * links within the specified `dom-module`.
   *
   * Note: This method is deprecated, use `stylesFromModuleImports` instead.
   *
   * @returns Concatenated CSS content from links in specified `dom-module`
   */
  function cssFromModuleImports(moduleId: string): string;
}
