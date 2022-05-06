import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { changeTheme } from '../../redux/themeSlice';
import { Container } from './styled';

function NextPage() {
  const dispatch = useDispatch();

  const handleLogout = (theme: any) => {
    console.log(theme)
    dispatch(changeTheme(theme))
  }

  return (
    <Container>
      <Container>
        <button onClick={() => handleLogout('light')}>Light</button>
        <button onClick={() => handleLogout('dark')}>Dark</button>
        <div>NextPage</div>
        <Link to="/">Back</Link>
      </Container>
    </Container>
  );
}

export default NextPage; 