// your code goes here

const Html5Element = Object.freeze({

    DIV: 'div',
    H1: 'h1',
    H2: 'h2'

});

const Pet = () => {
    return React.createElement(Html5Element.DIV, {}, [
        React.createElement(Html5Element.H1, {}, "Luna"),
        React.createElement(Html5Element.H2, {}, "Raymond"),
        React.createElement(Html5Element.H2, {}, "Havanese"),
    ]);
}

const App = () => {
    return React.createElement(
        Html5Element.DIV,
        { id: 'sub-root' },
        [
            React.createElement(Html5Element.H1, {}, "Adopt me"),
            React.createElement(Pet),
            React.createElement(Pet),
            React.createElement(Pet),
        ]
    );
}

const rootContainer = document.getElementById('root');
const reactRoot = ReactDOM.createRoot(rootContainer);
reactRoot.render(React.createElement(App, {id: 'where-does-this-id-go'}));
