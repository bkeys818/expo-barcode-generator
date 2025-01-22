import Svg, { G } from 'react-native-svg';
import JSBarcode from 'jsbarcode';

import { Background, BarcodeChunk, BarcodeText } from './components';
import {
  getMaximumHeightOfEncodings,
  getTotalWidthOfEncodings,
  merge,
  calculateEncodingAttributes
} from './services';
import defaultOptions from './defaultOptions';
import type { BarcodeData, BarcodeOptions, Encoding } from './types';

export interface BarcodeProps {
  value: string;
  options?: BarcodeOptions;
  rotation?: number;
}

export const Barcode = ({ value, options, rotation }: BarcodeProps) => {
  const barcode = {};
  JSBarcode(barcode, value, options);
  const encodings: Encoding[] = (barcode as BarcodeData).encodings;
  const mergedOptions = { ...defaultOptions, ...options };

  const measuredEncoding = calculateEncodingAttributes(encodings, mergedOptions);
  const totalWidth = getTotalWidthOfEncodings(measuredEncoding);
  const maxHeight = getMaximumHeightOfEncodings(measuredEncoding);
  const width = totalWidth + mergedOptions.marginLeft + mergedOptions.marginRight;

  const xs = [mergedOptions.marginLeft];
  measuredEncoding.forEach(e => xs.push(xs[xs.length - 1] + e.width));

  return (
    <Svg
      x={0}
      y={0}
      width={width}
      height={maxHeight}
      viewBox={`0 0 ${width} ${maxHeight}`}
      originX={0}
      originY={0}
      rotation={rotation}
    >
      {options?.background && (
        <Background width={width} height={maxHeight} color={options.background} />
      )}
      {measuredEncoding.map((encoding, i) => {
        const encodingOptions = merge(mergedOptions, encoding.options);

        return (
          <G key={i} x={xs[i]} y={encodingOptions.marginTop} fill={encodingOptions.lineColor}>
            <BarcodeChunk
              binary={encoding.data}
              padding={encoding.barcodePadding}
              options={encodingOptions}
            />
            <BarcodeText
              text={encoding.text}
              width={encoding.width}
              padding={encoding.barcodePadding}
              options={encodingOptions}
            />
          </G>
        );
      })}
    </Svg>
  );
};
