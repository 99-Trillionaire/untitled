import { InputHTMLAttributes, ReactNode } from "react";

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
    id: string;
    label?: string;
    children?: ReactNode;
}

const DEFAULT_STYLE =
    "tracking-wide py-2 px-4 rounded bg-black/5 border-[1px] border-transparent focus:border-white/75 focus:bg-white/50 focus:border-[1px]";
const Input = ({ id, label, children, ...rest }: IProps) => {
    return (
        <label htmlFor={id} className={"flex flex-col gap-2 relative"}>
            {label && <span className={"text-sm font-light"}>{label}</span>}
            <input
                {...rest}
                id={id}
                className={
                    rest.className ? `${rest.className} ${DEFAULT_STYLE}` : DEFAULT_STYLE
                }
            />
            {children}
        </label>
    );
};

export default Input;
