import { Component } from "react";
import PropTypes from "prop-types";

class Experiment extends Component {
  state = {
    loading: true,
    variant: 0
  };

  componentDidMount = () => {
    if (window.dataLayer) {
      window.dataLayer.push({ event: "optimize.activate" });
    }
    const intervalId = setInterval(() => {
      if (window.google_optimize !== undefined) {
        const variant = window.google_optimize.get(this.props.id);
        this.setState({
          variant,
          loading: false
        });
        clearInterval(intervalId);
      }
    }, 100);
  };

  render() {
    const { loading, variant } = this.state;
    return this.props.children({ loading, variant });
  }
}

Experiment.propTypes = {
  id: PropTypes.string.isRequired,
  children: PropTypes.func.isRequired
};

export default Experiment;
