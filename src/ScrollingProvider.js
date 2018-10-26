import React from 'react';
// import ReactDOM from 'react-dom';
import debounce from 'lodash/debounce';
import { Provider } from './scrollContext';

export default class ScrollingProvider extends React.Component {
  state = {
    selected: '',
  };

  refList = {};

  componentDidMount() {
    document.addEventListener('scroll', this.debounceScroll, true);
    this.handleScroll();
  }

  componentWillUnmount() {
    document.removeEventListener('scroll', this.debounceScroll, true);
  }

  handleScroll = () => {
    const selected = Object.entries(this.refList).reduce(
      (acc, [key, value]) => {
        // const node = ReactDOM.findDOMNode(value.current);
        // const { top } = node.getBoundingClientRect();
        const { top } = value.current.getBoundingClientRect();
        const differenceFromTop = Math.abs(top);

        return differenceFromTop < acc.differenceFromTop
          ? {
              differenceFromTop,
              key,
            }
          : acc;
      },
      {
        differenceFromTop: 9999,
        key: '',
      },
    );

    this.setState({ selected: selected.key });
  };

  debounceScroll = debounce(this.handleScroll, this.props.debounceDelay || 50);

  registerRef = id => {
    const newRef = React.createRef();
    this.refList = { ...this.refList, [id]: newRef };
    return newRef;
  };

  scrollTo = section => {
    // const myDomNode = ReactDOM.findDOMNode(this.refList[section].current);
    const { scrollBehavior: behavior } = this.props;
    const myDomNode = this.refList[section].current;

    this.setState({ selected: section }, () =>
      window.scrollTo({
        top: myDomNode.offsetTop,
        behavior,
      }),
    );
  };

  render() {
    const { selected } = this.state;
    const value = {
      registerRef: this.registerRef,
      scrollTo: this.scrollTo,
      selected,
    };
    return <Provider value={value}>{this.props.children}</Provider>;
  }
}
