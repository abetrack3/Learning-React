import { createElement } from "react";
import { createRoot } from "react-dom/client";
// your code goes here

const Html5Element = Object.freeze({
    DIV: 'div',
    H1: 'h1',
    H2: 'h2',
});

const Pet = (props) => {
    return createElement(Html5Element.DIV, {}, [
        createElement(Html5Element.H1, {}, props.name),
        createElement(Html5Element.H2, {}, props.animal),
        createElement(Html5Element.H2, {}, props.breed),
    ]);
};

const App = () => {
    return createElement(
        Html5Element.DIV,
        { id: 'sub-root' },
        // {},
        [
            createElement(Html5Element.H1, {}, 'Adopt me!'),
            createElement(Pet, {
                animal: 'Dog',
                name: 'Luna',
                breed: 'Havanese',
            }),
            createElement(Pet, {
                animal: 'Bird',
                name: 'Pepper',
                breed: 'Cockatiel',
            }),
            createElement(Pet, {
                animal: 'Cat',
                name: 'Doink',
                breed: 'Mixed',
            }),
        ]
    );
};

const rootContainer = document.getElementById('root');
const reactRoot = createRoot(rootContainer);
reactRoot.render(createElement(App, { id: 'where-does-this-id-go' }));
