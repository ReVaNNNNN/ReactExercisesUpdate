const App = () => {
    const [text, setText] = React.useState('');

    const handleOnClick = () => {
        const letter = "A";
        setText(text + letter);
    }

    return (
        <>
            <button onClick={handleOnClick}>Dodaj "A"</button>
            <h1>{text}</h1>
        </>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));
