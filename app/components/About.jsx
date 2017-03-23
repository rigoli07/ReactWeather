var React = require('react');

var About = (props) => {
    return (
        <div>
            <h3 className="text-center">About</h3>
            <p>This is a weather application, built on React.</p>
            <p>Here are some of the tools we used:</p>
            <ul>
                <li><a href="http://foundation.zurb.com" target="_blank">Foundation</a></li>
                <li><a href="http://facebook.github.io/react" target="_blank">React</a></li>
                <li><a href="http://openweathermap.org" target="_blank">Open Weather Map</a></li>
            </ul>
        </div>
    )
};

module.exports = About;