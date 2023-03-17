import { Drawer } from 'antd';
import { IMyDrawer } from './types';

export const MyDrawer = (props: IMyDrawer) => {
  const {
    children,
    className,
    headerStyle,
    height = '90vh',
    open = false,
    placement = 'bottom',
    size,
    title = '',
    width,
    onClose
  } = props;

  return (
    <>
      <Drawer
        className={className}
        extra={undefined}
        headerStyle={headerStyle}
        height={height}
        open={open}
        placement={placement}
        size={size}
        title={title}
        width={width}
        onClose={onClose}
      >
        {children}
      </Drawer>
    </>
  );
};
