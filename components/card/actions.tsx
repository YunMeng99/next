import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ConfigProvider from '../config-provider';
import { CardActionsProps } from './types';
/**
 * Card.Actions
 * @order 5
 */
class CardActions extends Component<CardActionsProps> {
    static propTypes = {
        prefix: PropTypes.string,
        component: PropTypes.elementType,
        className: PropTypes.string,
    };

    static defaultProps = {
        prefix: 'next-',
        component: 'div',
    };

    render() {
        const { prefix, component, className, ...others } = this.props;
        const Component = component as React.ElementType;
        return <Component {...others} className={classNames(`${prefix}card-actions`, className)} />;
    }
}

export default ConfigProvider.config(CardActions);
