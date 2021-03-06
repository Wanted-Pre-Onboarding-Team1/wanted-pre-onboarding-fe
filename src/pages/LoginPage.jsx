import React from 'react';
import styled from 'styled-components';
import RegisterBox, { RegisterGuide } from '../component/login/RegisterBox';
import SubLoginBox from '../component/login/SubLoginBox';
import LoginFormBox from '../component/login/LoginFormBox';
import { GLOBAL_COLOR } from '../styles/constans';

const LoginPage = () => {
  return (
    <LoginLayout>
      <ElementBox>
        <LoginFormBox />
        <SubLoginBox />
      </ElementBox>
      <ElementBox>
        <RegisterBox />
      </ElementBox>
      <DownloadGuide>앱을 다운로드 하세요.</DownloadGuide>
    </LoginLayout>
  );
};

const LoginLayout = styled.div`
  width: 400px;
  margin: 0 auto;
  text-align: center;
  padding: 40px;
`;
const ElementBox = styled.div`
  background-color: ${GLOBAL_COLOR.WHITE};
  border: 1px solid ${GLOBAL_COLOR.BORDER};
  margin-bottom: 10px;
`;
const DownloadGuide = styled(RegisterGuide)``;

export default LoginPage;
