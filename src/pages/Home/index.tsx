import React from 'react';
import { useDispatch } from 'react-redux';
import { Container } from './styled';
import { changeTheme } from '../../redux/themeSlice';
import { Link } from 'react-router-dom';

function Home() {
  const dispatch = useDispatch();

  const handleLogout = (theme: any) => {
    console.log(theme)
    dispatch(changeTheme(theme))
  }

  return (
    <Container>
      <button onClick={() => handleLogout('light')}>Light</button>
      <button onClick={() => handleLogout('dark')}>Dark</button>
      <div>Home</div>
      <Link to="/next-page">Next Page</Link>
    </Container>
  );
}
export default Home; 