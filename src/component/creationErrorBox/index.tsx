
type CreationErrorProps = {
    show: boolean,
    message: string;
}

const CreationErrorBox: React.FC<CreationErrorProps> = (props) => {
    if (!props.show) return null;

    return (
        <div className="creation-error">
            {props.message}
        </div>
    )
}

export default CreationErrorBox;