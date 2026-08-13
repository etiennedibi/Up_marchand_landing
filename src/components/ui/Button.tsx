import { cn } from "@/lib/cn";

/**
 * Boutons (DA §4).
 * - primary   : sarcelle plein, ombre portée. Un seul par écran.
 * - secondary : contour sarcelle, sur fond clair.
 * - onInk     : contour clair, pour les fonds encre (hero, diaspora, footer).
 * - gold      : réservé aux CTA d'urgence — compte à rebours, places limitées.
 * - link      : lien souligné, actions tertiaires.
 *
 * Hauteur minimale 48 px et rayon complet dans tous les cas : la cible tactile
 * doit rester confortable sur un Android d'entrée de gamme.
 */
type Variant = "primary" | "secondary" | "onInk" | "gold" | "link";
type Size = "md" | "lg";

const VARIANTS: Record<Variant, string> = {
  primary: "bg-teal text-white shadow-cta hover:bg-teal-hi",
  secondary: "border-2 border-teal text-teal hover:bg-teal-soft",
  onInk: "border-2 border-white/25 text-white hover:bg-white/10",
  gold: "bg-gold text-[#3A2B00] hover:bg-[#FFC91F]",
  link: "text-muted underline underline-offset-4 hover:text-teal",
};

const SIZES: Record<Size, string> = {
  md: "min-h-12 px-6 text-[0.95rem]",
  lg: "min-h-14 px-8 text-base",
};

type BaseProps = {
  variant?: Variant;
  size?: Size;
  fullWidth?: boolean;
  className?: string;
  children: React.ReactNode;
};

function classes({ variant = "primary", size = "md", fullWidth, className }: BaseProps) {
  return cn(
    "inline-flex items-center justify-center gap-2 rounded-full font-display font-bold leading-none",
    "transition-[background-color,color,border-color,box-shadow,transform] duration-180 ease-brand",
    "hover:-translate-y-0.5 active:translate-y-0",
    variant === "link" ? "min-h-0 px-1" : SIZES[size],
    VARIANTS[variant],
    fullWidth && "w-full",
    className,
  );
}

export function Button({
  type = "button",
  ...props
}: BaseProps & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const { variant, size, fullWidth, className, children, ...rest } = props;
  return (
    <button type={type} className={classes({ variant, size, fullWidth, className, children })} {...rest}>
      {children}
    </button>
  );
}

export function ButtonLink(props: BaseProps & React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  const { variant, size, fullWidth, className, children, ...rest } = props;
  return (
    <a className={classes({ variant, size, fullWidth, className, children })} {...rest}>
      {children}
    </a>
  );
}
