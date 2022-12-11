import styles from "@/components/Contact/Contact.module.scss";

interface PrimaryButtonProps {
  type?: "button" | "submit";
  label: string;
  onClick?: () => void;
  disabled?: boolean;
}

const PrimaryButton = ({
  type = "button",
  disabled = false,
  label,
  onClick,
}: PrimaryButtonProps) => {
  return (
    <button
      type={type}
      className={styles.button}
      disabled={disabled}
      onClick={onClick}
    >
      <span className={styles.default}>{label}</span>
    </button>
  );
};

export default PrimaryButton;
