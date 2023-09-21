import Link from "next/link";
import cn from "classnames";
import styles from "./index.module.scss";

type ButtonProps = {
  children: JSX.Element | JSX.Element[] | string;
  type?: "button" | "submit" | "reset";
  link?: { href: string; as?: string };
  onClick?: () => void;
  variant?: "transparent" | "like";
  disabled?: boolean;
};

const Button = ({
  children,
  type,
  link,
  variant,
  onClick,
  disabled,
}: ButtonProps): JSX.Element => {
  const classes = cn(styles.button, variant ? styles[variant] : "");

  if (onClick || !link) {
    return (
      <button
        className={classes}
        type={type === "submit" ? "submit" : "button"}
        onClick={onClick}
        disabled={disabled}
      >
        {children}
      </button>
    );
  }

  if (link && link.href.startsWith("/")) {
    return (
      <Link {...link} passHref>
        <button
          className={classes}
          type={type === "submit" ? "submit" : "button"}
          disabled={disabled}
        >
          {children}
        </button>
      </Link>
    );
  }

  return (
    <a
      href={link.href}
      target="_blank"
      rel="noopener noreferrer"
      className={classes}
    >
      {children}
    </a>
  );
};

export default Button;
