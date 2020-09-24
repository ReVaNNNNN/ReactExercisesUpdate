const App = () => {
    const [value, setValue] = React.useState('');

    const onClickHandler = () => {
        setValue('');
    }

    const onChangeHandler = (e) => {
        setValue(e.target.value)
    }

    return (
        <>
            <input 
                value={value} 
                placeholder="Wpisz..." 
                onChange={onChangeHandler} 
                type="text"
            />
            <button onClick={onClickHandler}>
                Reset
            </button>
            <h1 className="title">{value.toUpperCase()}</h1>
        </>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));