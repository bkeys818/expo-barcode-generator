interface Bar {
  x: number;
  width: number;
}

export function getBarsFromBinary(binary: string, bitWidth: number) {
  const bars: Bar[] = [];

  let barWidth = 0;
  for (let i = 0; i < binary.length; i++) {
    if (binary[i] === '1') {
      barWidth++;
    } else if (barWidth > 0) {
      bars.push({
        x: i * bitWidth,
        width: bitWidth * barWidth
      });
      barWidth = 0;
    }
  }
  return bars;
}
