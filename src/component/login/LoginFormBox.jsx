import React from 'react';
import styled from 'styled-components';
import useLogin from '../../hooks/useLogin';
import { GLOBAL_COLOR } from '../../styles/constans';
import { FlexColumn } from '../../styles/commonComponents';
import { Input } from '../common/Input';
import instagramImage from '../../assets/images/instagram.png';

const LoginFormBox = () => {
  const {
    emailRef,
    passwordRef,
    onLogin,
    isValidated,
    onCheckEmail,
    onCheckPw,
  } = useLogin();

  const disableCondition =
    !isValidated.email ||
    !isValidated.pw ||
    !emailRef?.current?.value.length ||
    !passwordRef?.current?.value.length;

  return (
    <form onSubmit={onLogin}>
      <Logo src={instagramImage} />
      <FlexColumn>
        <Input
          type="text"
          placeholder="전화번호, 사용자 이름 또는 이메일"
          name="email"
          ref={emailRef}
          onChange={onCheckEmail}
          validated={isValidated.email}
        />
        <Input
          type="password"
          placeholder="비밀번호"
          name="pw"
          ref={passwordRef}
          onChange={onCheckPw}
          validated={isValidated.pw}
        />
      </FlexColumn>
      <LoginBtn
        type="submit"
        value="로그인"
        onClick={onLogin}
        disabled={disableCondition}
      />
    </form>
  );
};

const Logo = styled.img`
  padding: 30px;
  width: 250px;
`;
const LoginBtn = styled.input`
  width: 250px;
  height: 28px;
  margin: 10px;
  font-weight: 600;
  background-color: #0095f6;
  color: ${GLOBAL_COLOR.WHITE};
  border-radius: 4px;
  cursor: pointer;
  :disabled {
    background-color: #bde5ff;
  }
`;

export default React.memo(LoginFormBox);
