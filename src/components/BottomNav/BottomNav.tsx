import React, {Component} from 'react';
import { TabBar } from 'antd-mobile';
import '../../static/iconfont/iconfont.css'
import { history } from 'umi';

const menu = [
  {
    title: '首页',
    link: '/home',
    icon: 'shouye'
  },
  {
    title: '购物车',
    link: '/cart',
    icon: 'icon4'
  },
  {
    title: '订单列表',
    link: '/orderList',
    icon: 'weibiaoti-'
  },
  {
    title: '我的',
    link: '/user',
    icon: 'biaoqiankuozhan_wode-140'
  },

]

type Props = {
  pathname: string
}

export default function BottomNav({pathname}: Props) {
  const tabItemOnPress = (link: String) => {
    history.push(link)
  }
  return (
    <TabBar
      tabBarPosition="bottom"
      tintColor="red"
      barTintColor="white"
    >
      {
        menu.map(({title, link, icon}, index) =>
          <TabBar.Item
          onPress={() => {
            tabItemOnPress(link)
          }}
          title={title}
          key={link}
          selectedIcon={<span className={`red iconfont icon-${icon}`}/>}
          icon={<span className={`iconfont icon-${icon}`}/>}
          selected={pathname === link}
          />)
      }
    </TabBar>
  );
}
