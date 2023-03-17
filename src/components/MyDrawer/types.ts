import { CSSProperties, MouseEvent, ReactNode } from 'react';

export type Placement = 'left' | 'right' | 'top' | 'bottom';
export interface IMyDrawer {
  children?: JSX.Element;
  className?: string;
  headerStyle?: CSSProperties;
  height?: number | string;
  open?: boolean;
  placement?: Placement;
  size?: 'default' | 'large';
  title?: string;
  width?: string;
  onClose?: (e: React.MouseEvent | React.KeyboardEvent) => void;
}
