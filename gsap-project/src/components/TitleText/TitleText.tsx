import "./TitleText.scss";

type titleProps = {
    id: string,
    children: string,
}

const TitleText = (props: titleProps) => {
    return (
        <>
            <div className="title_txt" id={props.id}>

            </div>
        </>
    )
}

export default TitleText
