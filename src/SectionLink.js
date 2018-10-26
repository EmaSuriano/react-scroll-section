import { withScrollingConsumer } from './scrollContext';

const SectionLink = (props) => {
  const onClick = () => props.scrollTo(props.section);
  const isSelected = props.selected === props.section;
  return props.children({ onClick, isSelected });
};

// export class SectionLink extends React.Component {
//   render() {
//     return (
//       <Consumer>
//         {data => {
//           const onClick = () => data.scrollTo(this.props.section);
//           const isSelected = data.selected === this.props.section;
//           return this.props.children({ onClick, isSelected });
//         }}
//       </Consumer>
//     );
//   }
// }

// export default SectionLink

export default withScrollingConsumer(SectionLink);
