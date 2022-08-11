import Main from '../Main/Main';

import styles from './Wrapper.module.css';

const Wrapper = props => {
  return (
    <div>
      <Main data={props.data} />
    </div>
  );
};

export default Wrapper;
