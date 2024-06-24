import { forwardRef, useEffect, useRef } from "react";

export default forwardRef(function TextInput(
    { type = "text", className = "", isFocused = false, ...props },
    ref
) {
    const input = ref ? ref : useRef();

    useEffect(() => {
        if (isFocused) {
            input.current.focus();
        }
    }, []);

    return (
        <div className="flex flex-col items-start">
            <input
                {...props}
                type={type}
                className={
                    "border-gray-300 focus:border-[#E1D123] focus:ring-[#E1D123] rounded-md shadow-sm " +
                    className
                }
                ref={input}
            />
        </div>
    );
});
