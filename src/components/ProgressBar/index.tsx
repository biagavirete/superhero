import { Container } from './styles'

export const ProgressBar = (props: any) => {
  const { value } = props;

  return (
    <Container>
      <progress value={value} max={100} />
    </Container>
  )

};

// ProgressBar.propTypes = {
//   value: PropTypes.number.isRequired,
//   max: PropTypes.number,
//   color: PropTypes.string,
//   width: PropTypes.string,
// };

// ProgressBar.defaultProps = {
//   max: 100,
//   color: '#e2c72d',
//   width: '10rem',
// };

export default ProgressBar;