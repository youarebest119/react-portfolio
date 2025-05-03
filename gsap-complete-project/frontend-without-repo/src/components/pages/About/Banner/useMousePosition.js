import { useState, useEffect } from "react";

const useMousePosition = (targetRef) => {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const updateMousePosition = (event) => {
            if (targetRef.current) {
                const rect = targetRef.current.getBoundingClientRect();
                setPosition({
                    x: event.clientX - rect.left,
                    y: event.clientY - rect.top,
                });
            }
        };

        const targetElement = targetRef.current;

        if (targetElement) {
            targetElement.addEventListener("mousemove", updateMousePosition);
        }

        return () => {
            if (targetElement) {
                targetElement.removeEventListener("mousemove", updateMousePosition);
            }
        };
    }, [targetRef]);

    return position;
};

export default useMousePosition;
