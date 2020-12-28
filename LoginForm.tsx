import React, {useRef} from 'react';
import {Button, InputItem, WhiteSpace, WingBlank, Checkbox} from "antd-mobile";

const CheckboxItem = Checkbox.CheckboxItem;

interface LoginFormProps {
    loginHandle: Function
}

const LoginForm: React.FC<LoginFormProps> = ({loginHandle}) => {
  const accountRef = useRef(null);
  const passwordRef = useRef(null);

  return (
    <WingBlank>
        <WhiteSpace/>
        <InputItem
            ref={accountRef}
            placeholder="请输入账号"
            clear>账号
        </InputItem>
        <WhiteSpace/>
        <InputItem
            ref={passwordRef}
            placeholder="请输入密码"
            clear>密码
        </InputItem>
        <WhiteSpace/>
        <CheckboxItem>保存密码</CheckboxItem>
        <WhiteSpace/>
        <Button type="primary" onClick={() => {
          const account = accountRef.current.state.value;
          const password = passwordRef.current.state.value;
          loginHandle(account, password)
        }}></Button>
    </WingBlank>
  );
}

export default LoginForm;
