import React, {useEffect, ReactElement} from 'react';
import {connect, Redirect} from 'umi';
import {ConnectState, ConnectProps, UserModelState} from '@/models/connect';

interface SecurityLayoutProps extends ConnectProps {
  user: UserModelState;
  children: ReactElement;
}

const SecurityLayout: React.FC<SecurityLayoutProps> = (props) => {
  const {children, user} = props
  // const {pathname} = location;

  console.log(14, user);
  const {userid} = user.currentUser;
  if (userid) {
    return children
  } else {
    return <Redirect to={'/login'} />
  }

};


export default connect(({user}: ConnectState) => ({user}))(SecurityLayout);
