import React from 'react';
import { Route, NavLink } from 'react-router-dom';
import Profile from './Profile';

const Profiles = ({ location }) => {
  const activeStyle = {
    background: 'black',
    color: 'white'
  };

  return (
    <div>
      <h3>사용자 목록: </h3>
      <ul>
        <li>
          <NavLink activeStyle={activeStyle} to={`/profiles/velopert`} active>
            velopert 프로필
          </NavLink>
        </li>
        <li>
          <NavLink activeStyle={activeStyle} to={`/profiles/gildong`}>
            gildong 프로필
          </NavLink>
        </li>
      </ul>
      <div>
        <Route
          path={`/profiles/`}
          exact
          render={() => <div>사용자를 선택해 주세요.</div>}
        ></Route>
        <Route path={`/profiles/:username`} component={Profile}></Route>
      </div>
    </div>
  );
};

export default Profiles;
