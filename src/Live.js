import React from 'react';
// var __html = require('./Agora/index.html');
// var template = { __html: __html };
import Iframe from 'react-iframe'

var iframe={
  __html: '<iframe src="http://tf.chinacloudsites.cn/" width="410" height="820" style="z-index: 999" ></iframe>'
}

export default class Community extends React.Component {
  render() {
    return(
      <Iframe
        url="https://tf.chinacloudsites.cn/"
        width="410"
        height="600"
        id="myId"
        className="myClassname"
        display="initial"
        position="relative"
        allowFullScreen
      />
        );
  }
}