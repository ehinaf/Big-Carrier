export default function PrimaryButton({
    className = "",
    disabled,
    children,
    ...props
}) {
    return (
        <button
            {...props}
            className={
                `inline-flex items-center px-4 py-2 bg-[#E1D123] border border-transparent rounded-md font-semibold 
                text-gray-800  ${disabled && "opacity-50"} ` + className
            }
            disabled={disabled}
        >
            {children}
        </button>
    );
}
