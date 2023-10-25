import clsx from 'clsx';

import styles from './Spinner.module.css';

export interface SpinnerProps {
  /**
   * Optional classname to apply to the spinner
   */
  className?: string;
  /**
   * The size of the spinner
   */
  size?: number;
}

export default function Spinner({ className, size = 30 }: SpinnerProps) {
  return (
    <div
      style={{ width: size, height: size }}
      className={clsx(styles.spinner, className)}
    >
      <div className={clsx(styles.child, styles.circle1)} />
      <div className={clsx(styles.child, styles.circle2)} />
      <div className={clsx(styles.child, styles.circle3)} />
      <div className={clsx(styles.child, styles.circle4)} />
      <div className={clsx(styles.child, styles.circle5)} />
      <div className={clsx(styles.child, styles.circle6)} />
      <div className={clsx(styles.child, styles.circle7)} />
      <div className={clsx(styles.child, styles.circle8)} />
      <div className={clsx(styles.child, styles.circle9)} />
      <div className={clsx(styles.child, styles.circle10)} />
      <div className={clsx(styles.child, styles.circle11)} />
      <div className={clsx(styles.child, styles.circle12)} />
    </div>
  );
}
