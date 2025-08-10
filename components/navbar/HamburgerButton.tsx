import React from "react";

interface HamburgerButtonProps {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  styles: any;
}

const HamburgerButton: React.FC<HamburgerButtonProps> = ({
  isOpen,
  setIsOpen,
  styles,
}) => {
  return (
    <button onClick={() => setIsOpen(!isOpen)} className={styles.hamburger}>
      {isOpen ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          width="30"
          height="30"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          width="30"
          height="30"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      )}
    </button>
  );
};

export default HamburgerButton;
