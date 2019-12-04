import React, {Component} from 'react';
import { MobileView } from './views/mobile/MobileView';
import { DesktopView } from './views/desktop/DesktopView';
import throttle from 'lodash/throttle';

export class App extends Component {
  state = {
    isMobile: false,
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize); 
    this.onResize();
    this.getWindowHeight();
  }
  
  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }
  
  handleResize = throttle(() => {
    this.onResize();
  }, 500)
  
  onResize = () => {
    this.setState({isMobile: window.innerWidth < 767}, this.getWindowHeight())
   
  }

  getWindowHeight = () => {
    let vh = window.innerHeight * 0.01;
    console.log(vh)

    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }

  render() {
    this.getWindowHeight();
    return(
      <>
        {this.state.isMobile ? <MobileView /> : <DesktopView/>}
      </>
    );
  }
}

export default App;
