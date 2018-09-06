import React, { Component } from 'react';
/*import classNames from 'classnames/bind';
import styles from './App.scss';
const cx = classNames.bind(styles);
console.log(styles);
*/
/*import Button from './components/Button';*/
import StyleButton from './components/StyledButtons';


class App extends Component {
  render() {

    /*const isBlue = true;*/

    return (
      <div>
          {/*<div className={cx('box',{
            blue: isBlue
          })}>

          <div className={cx('box-inside')}/>
          </div>*/}

          {/*<Button>버튼</Button>*/}

          <StyleButton big>
              버튼
          </StyleButton>
      </div>

    );
  }
}

export default App;
