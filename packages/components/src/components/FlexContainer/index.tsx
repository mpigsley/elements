import { CSSProperties } from 'react';
import clsx from 'clsx';

import styles from './FlexContainer.module.css';

export interface FlexContainerProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  align?:
    | 'stretch'
    | 'center'
    | 'flex-start'
    | 'flex-end'
    | 'baseline'
    | 'initial'
    | 'inherit';
  justify?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly'
    | 'initial'
    | 'inherit';
  direction?: 'row' | 'column';
  wrap?: boolean;
  scroll?: boolean;
  flex?: string;
  shrink?: '0' | '1';
  style?: React.CSSProperties;
}

export default function FlexContainer({
  align,
  justify,
  direction,
  wrap = false,
  scroll = false,
  flex,
  shrink,
  className,
  ...rest
}: FlexContainerProps) {
  const classNames = clsx(
    className,
    styles.flexContainer,
    !!align && styles[`align${formatClassName(align)}`],
    !!justify && styles[`justify${formatClassName(justify)}`],
    !!direction && styles[`direction${formatClassName(direction)}`],
    !!wrap && styles.wrap,
    !!scroll && styles.scroll,
    !!flex && styles.flex,
    !!shrink && styles[`shrink${shrink}`],
  );

  const style = flex
    ? ({ ...rest.style, '--flex': flex } as CSSProperties)
    : rest.style;

  return <div className={classNames} style={style} {...rest} />;
}

const formatClassName = (str: string) =>
  str.split('-').map(capitalize).join('');
const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);
