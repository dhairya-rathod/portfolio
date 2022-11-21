import { Icon } from "@/components/Icons";

import { SOCIAL_LINKS } from "../../constants";

import styles from "./Social.module.scss";

const Social = () => {
  return (
    <div className={styles.profile}>
      {SOCIAL_LINKS &&
        SOCIAL_LINKS.map(({ key, name, url }) => (
          <a
            href={url}
            key={name}
            className="link"
            rel="noreferrer"
            target="_blank"
            aria-label={name}
          >
            <Icon name={key} />
          </a>
        ))}
    </div>
  );
};

export default Social;
