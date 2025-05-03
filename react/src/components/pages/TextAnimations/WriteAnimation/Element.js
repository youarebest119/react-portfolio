import React, { useEffect, useRef, useState } from "react";

const Element = (props) => {
    const { speed, text, elementType } = props;
    const [placeholder, setPlaceholder] = useState([<span style={{ color: text[0]?.color }}>{text[0]?.letter}</span>]);

    const index = useRef(0);
    useEffect(() => {
        index.current = 0;
        setPlaceholder([<span style={{ color: text[0]?.color }}>{text[0]?.letter}</span>]);
    }, [text]);

    useEffect(() => {
        function tick() {
            index.current++;
            setPlaceholder((prev) => [...prev, typeof text[index.current]?.letter === "string" ? <span style={{ color: text[index.current]?.color }}>{text[index.current]?.letter === "&nbsp;" ? <>&nbsp;</> : text[index.current]?.letter}</span> : <br />]);
        }
        if (index.current < text.length - 1) {
            let addChar = setInterval(tick, speed);
            return () => clearInterval(addChar);
        }
    }, [placeholder, speed, text]);
    return React.createElement(elementType || "div", null, placeholder);
};

export default Element;
