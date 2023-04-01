type ButtonTypeProps = {
    buttonName: string;
    callBack: () => void
    clearPage: () => void
}

export function Button(props: ButtonTypeProps) {


    const onClickButtonHandler = () => {
        props.callBack()
    }

    const onClickButtonHandler2 = () => {
        props.clearPage()
    }

    return (
        <div>
            <button
                style={{background: "dodgerblue", borderRadius: "5px"}}
                onClick={onClickButtonHandler}
            >
                {props.buttonName}
            </button>

            <button
                style={{background: "tomato", borderRadius: "5px"}}
                onClick={onClickButtonHandler2}
            >
                Clear the Page
            </button>
        </div>

    )
}