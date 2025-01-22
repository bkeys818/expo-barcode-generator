import type JSBarcode from 'jsbarcode';
import type defaultOptions from './defaultOptions';

/** Derived from `jsbarcode` */
export interface Encoding {
  data: string;
  options: JSBarcode.Options;
  text: string;
}

export interface BarcodeData {
  encodings: Encoding[];
}

export interface MeasuredEncoding extends Encoding {
  width: number;
  height: number;
  barcodePadding: number;
}

export type InternalOptions = JsBarcode.Options & typeof defaultOptions;
