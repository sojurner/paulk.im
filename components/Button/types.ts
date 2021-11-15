import styles from './styles.scss';

export namespace µButton {
  export const Variants = Object.freeze({
    primary: styles.btnPrimary,
    primaryActive: styles.btnPrimaryActive,
    secondary: styles.btnSecondary,
    secondaryActive: styles.btnSecondaryActive,
    negative: styles.btnNegative,
    negativeActive: styles.btnNegativeActive,
    positive: styles.btnPositive,
    positiveActive: styles.btnPositiveActive,
    neutral: styles.btnNeutral,
    default: styles.btnDefault,
    defaultActive: styles.btnDefaultActive,
  });

  export type VariantKey = keyof typeof Variants;

  export interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: VariantKey;
    className?: string;
  }
}
