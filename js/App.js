var React = require('react');

var App = React.createClass({
  getInitialState: function() {
    return {text: ''};
  },
  handleChange: function (e) {
    this.setState({text: e.target.value});
  },  
	render: function() {
		return (
			<div>
        <input type="text" onChange={this.handleChange}/>
        {this.state.text}
  		</div>
		);
	}
});

module.exports = App;