import styles from "@/components/Contact/Contact.module.scss";

interface PrimaryButtonProps {
  type?: "button" | "submit";
  label: string;
  onClick?: () => void;
  disabled?: boolean;
  variant?: "primary" | "success" | "danger";
  textVariant?: "base" | "bold";
}

const PrimaryButton = ({
  type = "button",
  disabled = false,
  label,
  onClick,
  variant = "primary",
  textVariant,
}: PrimaryButtonProps) => {
  return (
    <button
      type={type}
      className={`${styles.button} ${
        variant === "success"
          ? styles.btnSuccess
          : variant === "danger"
          ? styles.btnDanger
          : "btn-primary"
      }
			${textVariant === "base" && styles.textBase}
			`}
      disabled={disabled}
      onClick={onClick}
    >
      <span className={styles.default}>{label}</span>
    </button>
  );
};

export default PrimaryButton;
