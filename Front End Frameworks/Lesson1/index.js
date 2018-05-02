import React from 'react';
import ReactDOM from 'react-dom';

const color1 = React.createElement('li', {}, 'Blue');
const color2 = React.createElement('li', {}, 'Red');
const color3 = React.createElement('li', {}, 'Green');
const color4 = React.createElement('li', {}, 'Black');

const music1 = React.createElement('li', {}, 'Dance');
const music2 = React.createElement('li', {}, 'Trance');
const music3 = React.createElement('li', {}, 'Dubstep');
const music4 = React.createElement('li', {}, 'Pop');

const food1 = React.createElement('li', {}, 'Mexican');
const food2 = React.createElement('li', {}, 'Chinese');
const food3 = React.createElement('li', {}, 'American');
const food4 = React.createElement('li', {}, 'Greek');

const site1 = React.createElement('li', {}, React.createElement('a', { href: "https://www.instagram.com" }, "www.instagram.com"));
const site2 = React.createElement('li', {}, React.createElement('a', { href: "https://www.facebook.com" }, "www.facebook.com"));
const site3 = React.createElement('li', {}, React.createElement('a', { href: "https://www.netflix.com" }, "www.netflix.com"));
const site4 = React.createElement('li', {}, React.createElement('a', { href: "https://www.pandora.com" }, "www.pandora.com"));



ReactDOM.render(
    React.createElement(
        'div',
        {},
        React.createElement(
            'h1',
            {},
            "My Favorite Things",
        ),
        React.createElement(
            'ul',
            {},
            React.createElement(
            'li',
            {},
            'Favorite Colors',
                React.createElement(
                    'ol',
                    {},
                    color1,
                    color2,
                    color3,
                    color4,
                )
            ),
            React.createElement(
            'li',
            {},
            'Favorite Music',
                React.createElement(
                    'ol',
                    {},
                    music1,
                    music2,
                    music3,
                    music4,
                )
            ),
            React.createElement(
            'li',
            {},
            'Favorite Food',
                React.createElement(
                    'ol',
                    {},
                    food1,
                    food2,
                    food3,
                    food4,
                )
            ),
            React.createElement(
            'li',
            {},
            'Favorite Websites',
                React.createElement(
                    'ol',
                    {},
                    site1,
                    site2,
                    site3,
                    site4,
                )
            ),
        ),
    ),
  document.getElementById('root')
);

