import { useEffect, useRef, useState } from 'react';
import './ErrorMsg.scss';

const ErrorMsg = ({ children }: { children?: string }) => {
    const contentRef = useRef<HTMLParagraphElement>(null);
    const [height, setHeight] = useState(0);

    useEffect(() => {
        if (contentRef.current) {
            setHeight(children ? contentRef.current.scrollHeight : 0);
        }
    }, [children]);

    return (
        <p
            className={`error`}
            ref={contentRef}
            style={{ height: `${height}px` }}
        >
            {children}
        </p>
    );
};

export default ErrorMsg;
