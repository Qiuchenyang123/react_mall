import React, {useEffect} from 'react';
import 'antd-mobile/dist/antd-mobile.css';
import {Location, Dispatch, connect} from 'umi';
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

  console.log('props', props)
  return (
    <div className="BasicLayoutWrap">
      <SecurityLayout user={user} key={'123'}>
          <article>{children}</article>
      </SecurityLayout>
      <BottomNav pathname={pathname}/>
    </div>
  );
}

export default connect(({user}: ConnectState) => ({user}))(BasicLayout);


