import React from 'react'
import styles from "./Label.module.scss";
import { CrossIcon, PlusIcon } from '../../../../assets/icons/svgicons';

const Label = ({ text, onRemove, onAdd }) => {
    return (
        <div className={styles.lable}>
            <p>{text}</p>
            {
                onRemove && <button onClick={onRemove}><CrossIcon /></button>
            }
            {
                onAdd && <button onClick={onAdd}><PlusIcon /></button>
            }
        </div>
    )
}

export default Label
