import React, {useEffect} from 'react';
import LoginForm from '@/page/login/LoginForm';
import {Location, Dispatch, connect, Redirect} from 'umi';
import {ConnectState, ConnectProps, UserModelState} from '@/models/connect';

interface LoginProps extends ConnectProps {
  user: UserModelState
}

const Login: React.FC<LoginProps> = (props) => {
  const {location, dispatch, user} = props
  const {userid} = location;
  const isLogin = !!userid;

  if (isLogin) {
      const {from = '/'} = location.state || {};
      return <Redirect to={from} />
  }

  const loginHandle = (account: String, password: String) =>{
      dispatch({ type: 'user/login', payload: {password, name: account} });
  }

  return (
    <div className="loginWrap">
      <div className="formWrap">
        <LoginForm loginHandle={loginHandle}/>
      </div>
    </div>
  );
}

export default connect(({user}: ConnectState) => ({user}))(Login);
