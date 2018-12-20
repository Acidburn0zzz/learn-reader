/**
 * DO NOT EDIT
 *
 * This file was automatically generated by
 *   https://github.com/Polymer/tools/tree/master/packages/gen-typescript-declarations
 *
 * To modify these typings, edit the source file(s):
 *   polymer-element.js
 */


// tslint:disable:variable-name Describing an API that's defined elsewhere.

declare module 'goog:polymer.polymer.polymerElement' {

  import {ElementMixin} from 'goog:polymer.polymer.lib.mixins.elementMixin'; // from //third_party/javascript/polymer/v2/polymer

  export {html} from 'goog:polymer.polymer.lib.utils.htmlTag'; // from //third_party/javascript/polymer/v2/polymer

  export {PolymerElement};

  /**
   * Base class that provides the core API for Polymer's meta-programming
   * features including template stamping, data-binding, attribute deserialization,
   * and property change observation.
   */
  class PolymerElement extends
    ElementMixin(
    HTMLElement) {
  }
}