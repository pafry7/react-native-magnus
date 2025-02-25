import {
  ButtonProps,
  DivProps,
  InputProps,
  RadioProps,
  IconProps,
  TextProps,
} from '../ui';

import { RadioGroupProps } from '../ui/radio/radio.type';
import { ThemeProps, VariantType } from '../types';

export interface ThemeType {
  components?: {
    Button?: VariantType<ButtonProps>;
    Div?: VariantType<DivProps>;
    Input?: VariantType<InputProps>;
    Radio?: VariantType<RadioProps>;
    Icon?: VariantType<IconProps>;
    RadioGroup?: VariantType<RadioGroupProps>;
    Text?: VariantType<TextProps>;
  };

  fontFamily?: {
    normal?: string;
    bold?: string;
    100?: string;
    200?: string;
    300?: string;
    400?: string;
    500?: string;
    600?: string;
    700?: string;
    800?: string;
    900?: string;
  };

  colors?: ThemeProps<string>;
  fontSize?: ThemeProps<number>;
  borderRadius?: { none: 0; circle: 99999 } & ThemeProps<number>;
  spacing?: { none: 0 } & ThemeProps<number>;
  shadowColor?: string;
  shadow?: ThemeProps<{
    shadowOffset?: {
      width: number;
      height: number;
    };
    shadowOpacity?: number;
    shadowRadius?: number;
    elevation?: number;
  }>;
  name?: string;
}
