import styles from "./Button.module.scss";

const LinkButton = ({
  href,
  onClick,
  children,
  classes,
  type,
  ...otherProps
}: any) => {
  let additionalClasses = "";
  if (classes) {
    additionalClasses = classes;
  }

  return (
    <a
      href={href}
      onClick={onClick}
      className={`
        ${
          type === "primary"
            ? !otherProps.disable
              ? styles.primary__button
              : styles.primary__disabledButton
            : !otherProps.disable
            ? styles.secondary__button
            : styles.secondary__disabledButton
        }
          ${additionalClasses}
      `}
      {...otherProps}
    >
      {children}
    </a>
  );
};

export default LinkButton;
