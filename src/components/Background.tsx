import { Rect } from 'react-native-svg';

interface BarcodeProps {
  width: number;
  height: number;
  color: string;
}

export const Background = ({ width, height, color }: BarcodeProps) => (
  <Rect x={0} y={0} width={width} height={height} style={{ fill: color }} />
);
