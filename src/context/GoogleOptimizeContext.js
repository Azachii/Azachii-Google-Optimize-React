import { Component } from "react";
import PropTypes from "prop-types";

class GoogleOptimizeProvider extends Component {
  componentDidMount() {
    const script = document.createElement("script");
    script.src = `https://www.googletagmanager.com/gtag/js?id=${this.props.analytics}`;
    script.async = true;
    document.head.appendChild(script);
    window.dataLayer = window.dataLayer || [];
    const gtag = function() {
      dataLayer.push(arguments);
    };
    gtag("js", new Date());
    gtag("config", this.props.analytics, {
      optimize_id: this.props.optimize
    });
  }

  render() {
    return this.props.children;
  }
}

GoogleOptimizeProvider.propTypes = {
  analytics: PropTypes.string.isRequired,
  optimize: PropTypes.string.isRequired
};

export default GoogleOptimizeProvider;
