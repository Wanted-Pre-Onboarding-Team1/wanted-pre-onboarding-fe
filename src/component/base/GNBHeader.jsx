import React from 'react';
import styled from 'styled-components';
import { Input } from '../common/Input';
import { FlexRow } from '../../styles/commonComponents';
import { Link, Outlet } from 'react-router-dom';
import media from '../../styles/media';
import { BsSearch } from 'react-icons/bs';
import { ICON_ITEMS } from '../../libs/constans';
import { GLOBAL_COLOR } from '../../styles/constans';
import instagramImage from '../../assets/images/instagram.png';

const GNBHeader = () => {
  return (
    <>
      <Header>
        <Logo src={instagramImage} />
        <SearchBox>
          <SearchIcon size={12} />
          <SearchInput
            validated={true}
            placeholder="검색"
            variant="secondary"
          />
        </SearchBox>
        <IconBox>
          {ICON_ITEMS.map(({ name, href, icon }) => (
            <Link to={href} key={name}>
              {icon}
            </Link>
          ))}
        </IconBox>
      </Header>
      <Outlet />
    </>
  );
};

const Logo = styled.img`
  height: 40px;
`;
const Header = styled.header`
  position: sticky;
  top: 0;
  width: 100%;
  display: flex;
  align-items: center;
  height: 60px;
  justify-content: space-between;
  padding: 0 30px;
  background-color: ${GLOBAL_COLOR.WHITE};
  border: 1px solid ${GLOBAL_COLOR.BORDER};
`;
const IconBox = styled(FlexRow)`
  min-width: 278px;
  justify-content: space-evenly;
  text-decoration: none;
`;
const SearchBox = styled.div`
  ${media.small} {
    display: none;
  }
`;
const SearchInput = styled(Input)`
  width: 268px;
  max-width: 316px;
`;
const SearchIcon = styled(BsSearch)`
  position: absolute;
  top: 24px;
  margin-left: 14px;
  color: ${GLOBAL_COLOR.GRAY_2};
`;

export default GNBHeader;
