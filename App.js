const heading = React.createElement('h1', {id:'heading'}, 'LIST OF FRUITS');

const li1 = React.createElement('li', {}, 'Apple');
const li2 = React.createElement('li', {}, 'Mango');
const li3 = React.createElement('li', {}, 'Banana');
const ul = React.createElement('ul', {class:'lists'}, [li1, li2, li3]);

const container = React.createElement('div', {id: 'container'}, [heading, ul]);
console.log(container)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(container);














