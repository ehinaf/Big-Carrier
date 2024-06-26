export default function Checkbox({ className = "", ...props }) {
    return (
        <input
            {...props}
            type="checkbox"
            className={
                "rounded border-gray-300 text-[#E1D123] shadow-sm focus:ring-0 " +
                className
            }
        />
    );
}
