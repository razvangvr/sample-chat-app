

const TextInputComponent = ({content, handleInputChange, handleMessageEntered}) => {




    const handleInputKeyPress = (event) => {
        if (event.key === 'Enter') {
            // Update text or perform any action here
            handleMessageEntered();
            console.log('Entered text:');
        }
    };

    return (
        <div>
            <label htmlFor="textInput">Message: </label>
            <input
                size="65"
                type="text"
                id="textInput"
                value={content}
                onChange={e => handleInputChange(e.target.value)}
                onKeyPress={handleInputKeyPress}
            />
            <p>You typed: {content}</p>
        </div>
    );

}


export default TextInputComponent;
