import React, { Component } from 'react';
import BodySection from './BodySection';
import './BodySectionWithMarginBottom.css';
import PropTypes from 'prop-types';

class BodySectionWithMarginBottom extends Component {
	render() {
		return (
			<div className='bodySectionWithMargin'>
				<BodySection {...this.props} />
			</div>
		);
	}
}

BodySectionWithMarginBottom.propTypes = {
	title: PropTypes.string,
	children: PropTypes.element,
};

export default BodySectionWithMarginBottom;
