import React from 'react';
import { hashHistory } from 'react-router';

import {Tabs, Tab} from 'material-ui/Tabs';
import SwipeableViews from 'react-swipeable-views';
import TapCollection from '../container/TapCollection';
import TapTools from '../container/TapTools';
import TapProject from '../container/TapProject';
import Collection from 'material-ui/svg-icons/action/turned-in';
import Build from 'material-ui/svg-icons/action/build';
import Blog from 'material-ui/svg-icons/editor/insert-drive-file';
import Project from 'material-ui/svg-icons/action/picture-in-picture';


const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
  slide: {
    padding: 10,
  },
};

export default class NavTap extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      slideIndex: hashHistory.getCurrentLocation().pathname,
    };
  }

  handleChange = (value) => {
    this.setState({
      slideIndex: value,
    });
    
    if(value == 'blog'){
      window.location='http://houserqu.com';
    }else{
      hashHistory.push(value);
    }
  };

  render() {
    return (
      <div>
        <Tabs
          onChange={this.handleChange}
          value={this.state.slideIndex}
        >
          <Tab icon={<Collection />}  label="网站收藏" value={"/collection"} />
          <Tab icon={<Build />} label="工具" value={"/tools"} />
          <Tab icon={<Blog />} label="博客" value={"blog"} />
          <Tab icon={<Project />} label="项目" value={"/project"} />
        </Tabs>
      </div>
    );
  }
}