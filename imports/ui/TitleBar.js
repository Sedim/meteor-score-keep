import React from 'react';
import PropTypes from 'prop-types';

export default class TitleBar extends React.Component {
  renderSubtitle(){
    if (this.props.subtitle)
      return <h2>{this.props.subtitle}</h2>
    // else return undefined which is fine for jsx 
    // it does not care.
  }
  render() {
    // this.props.title // Is passed from the TitleBar tag
    return (
      <div className="title-bar"> {/* className="title-bar" is css formatting see main.scss */} 
        <div className="wrapper"> {/* wrapper: centers the title and subtitle see main.sccs */}
        <h1>{this.props.title}</h1>
        {this.renderSubtitle()} {/* renderSubtitle to check if it exsists */}
                                {/* so that we don't leave tags behind i.e. <h2></h2> */}
        </div>
      </div>
    );
  }
}

TitleBar.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string
}

TitleBar.defaultProps = {
  // title: 'Default Title'
} 