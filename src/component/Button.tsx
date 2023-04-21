import { ButtonHTMLAttributes } from "react";

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  id: string;
  label?: string;
}

const DEFAULT_STYLE =
  "mix-blend-normal rounded bg-[var(--main-pink)] p-2 text-white hover:bg-[var(--main-pink-darker)] disabled:bg-[var(--main-pink-lighter)]";

const Button = ({ id, label, ...rest }: IProps) => {
  return (
    <button
      {...rest}
      id={id}
      className={
        rest.className ? `${rest.className} ${DEFAULT_STYLE}` : DEFAULT_STYLE
      }
    >
      {label}
    </button>
  );
};

export default Button;
