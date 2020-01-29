import React, { useState } from 'react';
import { connect } from 'react-redux';

import Input from '../../Helpers/Input';
import Button from '../../Helpers/Button';

import { getData } from '../../Pages/Home/store/actions';

import HeaderStyledContainer from './Header.styled';

const Header = (props) => {
  const [searchValue, setSearchValue] = useState('');

  const _handleInput = (value) => {
    setSearchValue(value);
  };

  const _handleSearch = () => {
    if(searchValue.length > 0) {
      props.dispatch(getData(searchValue));
      setSearchValue('');
    }
  };

  return(
    <HeaderStyledContainer>
      <div className='site-name header24'>Songs Finder</div>
      <div>
        <Input className='header12' value={searchValue} placeHolder='Search Singer Here' onChange={e => _handleInput(e.target.value)} />
        <Button className='search-btn header12' buttonText='Search' onClick={_handleSearch} />
      </div>
    </HeaderStyledContainer>
  );
}

export default connect()(Header);