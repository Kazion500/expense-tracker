import { CustomTextProps } from '../CustomText/CustomText.types';

export interface AmountProps {
  amount: number | string;
  currencySize: CustomTextProps['size'];
}
