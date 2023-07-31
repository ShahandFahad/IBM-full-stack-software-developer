function App(props) {
    const currDate = new Date();


    return (
        <div>
            <h1>Hello World</h1>
            <h2> {currDate.toLocaleDateString()} :: {currDate.toLocaleTimeString()}</h2>
        </div>
    );
  }
  
  export default App;