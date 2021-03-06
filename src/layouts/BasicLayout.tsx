import React, {useEffect} from 'react';
import 'antd-mobile/dist/antd-mobile.css';
import {Location, Dispatch, connect} from 'umi';
import '../static/style/base.css';
import {ConnectState, ConnectProps, UserModelState} from '@/models/connect';
import BottomNav from "@/components/BottomNav/BottomNav";
import SecurityLayout from "@/layouts/SecurityLayout";

interface BasicLayoutProps {
  location: Location,
  dispatch: Dispatch,
  user: any
}

const BasicLayout: React.FC<BasicLayoutProps> = (props) => {
  const {children, location, dispatch, user} = props
  const {pathname} = location;

  useEffect(() => {
    // 获取用户信息
    if (dispatch) {
      dispatch({
        type: 'user/fetchCurrent'
      })
    }
  }, [])

  return (
    <div className="BasicLayoutWrap">
      <article>{children}</article>
    </div>
  );
}

export default connect(({user}: ConnectState) => ({user}))(BasicLayout);
