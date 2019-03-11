import React, { Component } from 'react';
import propTypes from 'prop-types';
import { Tabs, Tab } from '@patternfly/react-core';
import './apptabs.scss';

const tabItems = [{ eventKey: 0, title: 'Requests', name: '/requests' }, { eventKey: 1, title: 'Workflows', name: '/workflows' }];

class AppTabs extends Component {
  state = {
    activeTabKey: 0
  };

  // Toggle currently active tab
  handleTabClick = (event, tabIndex) => {
    this.setState({
      activeTabKey: tabIndex
    });

    this.props.children.props.childProps.history.push(tabItems[tabIndex].name);
  };

  render() {
    return (
      <React.Fragment>
        <Tabs className="ins-tabs" activeKey={ this.state.activeTabKey } onSelect={ this.handleTabClick }>
          { tabItems.map((item) => <Tab title={ item.title } key={ item.eventKey } eventKey={ item.eventKey } name={ item.name }/>) }
        </Tabs>
        { this.props.children }
      </React.Fragment>
    );
  }
}

AppTabs.propTypes = {
  children: propTypes.any,
  location: propTypes.object,
  history: propTypes.object
};

export default AppTabs;
