import { Text, TextAnchor } from 'react-native-svg';

interface BarcodeTextProps {
  text: string;
  width: number;
  padding: number;
  options: {
    displayValue: boolean;
    textPosition: 'top' | 'bottom';
    fontSize: number;
    textMargin: number;
    textAlign: 'left' | 'right' | 'center';
    height: number;
    lineColor: string;
  };
}

export const BarcodeText = ({ text, width, padding, options }: BarcodeTextProps) => {
  // Draw the text if displayValue is set
  if (options.displayValue) {
    let x: number, y: number, textAnchor: TextAnchor;

    if (options.textPosition == 'top') {
      y = options.fontSize - options.textMargin;
    } else {
      y = options.height + options.textMargin + options.fontSize;
    }

    // Draw the text in the correct X depending on the textAlign option
    if (options.textAlign == 'left' || padding > 0) {
      x = 0;
      textAnchor = 'start';
    } else if (options.textAlign == 'right') {
      x = width - 1;
      textAnchor = 'end';
    }
    // In all other cases, center the text
    else {
      x = width / 2;
      textAnchor = 'middle';
    }

    return (
      <Text
        x={x}
        y={y}
        fontSize={options.fontSize}
        fontWeight="bold"
        textAnchor={textAnchor}
        fill={options.lineColor}
      >
        {text}
      </Text>
    );
  } else {
    return null;
  }
};
