export interface CustomTextProps {
  size?: 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'xxxl';
  color?:
    | 'primary'
    | 'secondary'
    | 'success'
    | 'danger'
    | 'warning'
    | 'gray'
    | 'dark'
    | 'white';

  light?: boolean;
}
