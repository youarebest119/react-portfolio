import React, { useEffect, useState } from 'react'
import Select from "react-select";
import styles from "./ReactSelect.module.scss";
import { animate, stagger } from "framer-motion";

const ReactSelect = () => {
    const [menuIsOpen, setMenuIsOpen] = useState(false);
    const handleMenu = () => {
        setMenuIsOpen(true);
    }
    useEffect(() => {
        if (menuIsOpen) {
            animate(".select__option", { x: [-100, 0] }, { delay: stagger(0.1) })
        }
    }, [menuIsOpen])

    return (
        <>
            <section className={styles.react_select}>
                <Select
                    className={styles.select}
                    options={
                        [
                            { label: "Option 1", value: "option-1" },
                            { label: "Option 2", value: "option-2" },
                            { label: "Option 3", value: "option-3" },
                            { label: "Option 4", value: "option-4" },
                        ]
                    }
                    onMenuOpen={handleMenu}
                    onMenuClose={() => setMenuIsOpen(false)}
                    menuIsOpen={menuIsOpen}
                    classNamePrefix={"select"}
                />
            </section>
        </>
    )
}

export default ReactSelect
