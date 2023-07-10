// your code goes here

const Html5Element = Object.freeze({

    DIV: 'div',
    H1: 'h1',
    H2: 'h2'

});

const Pet = (props) => {
    return React.createElement(Html5Element.DIV, {}, [
        React.createElement(Html5Element.H1, {}, props.name),
        React.createElement(Html5Element.H2, {}, props.animal),
        React.createElement(Html5Element.H2, {}, props.breed),
    ]);
}

const App = () => {
    return React.createElement(
        Html5Element.DIV,
        { id: 'sub-root' },
        // {},
        [
            React.createElement(Html5Element.H1, {}, "Adopt me!"),
            React.createElement(Pet, {
                animal: 'Dog',
                name: 'Luna',
                breed: 'Havanese'
            }),
            React.createElement(Pet, {
                animal: 'Bird',
                name: 'Pepper',
                breed: 'Cockatiel'
            }),
            React.createElement(Pet, {
                animal: 'Cat',
                name: 'Doink',
                breed: 'Mixed'
            }),
        ]
    );
}

const rootContainer = document.getElementById('root');
const reactRoot = ReactDOM.createRoot(rootContainer);
reactRoot.render(React.createElement(App, {id: 'where-does-this-id-go'}));
