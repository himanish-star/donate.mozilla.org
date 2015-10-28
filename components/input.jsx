import React from 'react';

module.exports = React.createClass({
  propTypes: {
    onChange: React.PropTypes.func.isRequired
  },
  getInitialState: function() {
    return {
      valid: true
    };
  },
  onInputChange: function(e) {
    this.setState({
      valid: true
    });
    this.props.onChange(this.props.name, this, this.props.type, e.currentTarget.value);
  },
  validate: function() {
    var valid = true;
    var value = this.props.value || "";
    value = value.trim();
    valid = !!value;
    this.setState({
      valid: valid
    });
    return valid;
  },
  componentDidMount: function() {
    this.props.onChange(this.props.name, this);
  },
  render: function() {
    var className = "test-shit";
    if (!this.state.valid || this.props.error) {
      className += " parsley-error";
    }
    return (
      <input className={className} type="text" name={this.props.type} onChange={this.onInputChange} value={this.props.value} placeholder={this.props.placeholder}/>
    );
  }
});
