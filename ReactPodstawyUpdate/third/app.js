const App = () => {
  const [counter, setCounter] = React.useState(0);
  const [result, setResult] = React.useState(0);

  const onClickHandler = (type, number = 0) => {
    if (type === "sub") {
      setResult(result - number);
    } else if (type === "add") {
      setResult(result + parseInt(number));
    } else {
      setResult(0);
    }

    setCounter(counter + 1);
  };

  return (
    <>
      <MathButton name="-10" number="10" type="sub" click={onClickHandler} />
      <MathButton name="-1" number="1" type="sub" click={onClickHandler} />
      <MathButton name="Reset" type="res" click={onClickHandler} />
      <MathButton name="1" number="1" type="add" click={onClickHandler} />
      <MathButton name="10" number="10" type="add" click={onClickHandler} />
      <h2>Liczba kliknieć: {counter}</h2>
      <h2>Wynik: {result}</h2>
    </>
  );
};

const MathButton = (props) => {
  return (
    <>
      <button onClick={() => props.click(props.type, props.number)}>
        {props.name}
      </button>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
