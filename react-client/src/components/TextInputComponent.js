

const TextInputComponent = ({content, handleInputChange}) => {

    return (
        <div>
            <label htmlFor="textInput">Message: </label>
            <input
                size="65"
                type="text"
                id="textInput"
                value={content}
                onChange={e => handleInputChange(e.target.value)}
            />
            <p>You typed: {content}</p>
        </div>
    );

}


export default TextInputComponent;
