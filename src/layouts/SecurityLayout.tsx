import React, {useEffect, ReactElement} from 'react';
import {connect, Redirect, history} from 'umi';
import {ConnectState, ConnectProps, UserModelState} from '@/models/connect';
import BottomNav from '@/components/BottomNav/BottomNav';

interface SecurityLayoutProps extends ConnectProps {
  user: UserModelState;
  children: ReactElement;
}

const SecurityLayout: React.FC<SecurityLayoutProps> = (props) => {
  const {children, user, location} = props
  const {pathname} = location;

  const {userid} = user.currentUser;
  const isLogin = !!userid;

  if (isLogin) {
    return (
        <div>
            <article>{children}</article>
            <footer>
                <BottomNav pathname={pathname}/>
            </footer>
        </div>
    )
  } else {
    return <Redirect to={{pathname: '/login', state: {from: pathname}}} />
  }

};


export default connect(({user}: ConnectState) => ({user}))(SecurityLayout);
