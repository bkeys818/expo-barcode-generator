import type { MeasuredEncoding } from '../types';

export function getMaximumHeightOfEncodings(encodings: MeasuredEncoding[]) {
  let maxHeight = 0;
  for (let i = 0; i < encodings.length; i++) {
    if (encodings[i].height > maxHeight) {
      maxHeight = encodings[i].height;
    }
  }
  return maxHeight;
}
