import React from 'react';
import qs from 'qs';

const About = ({ location }) => {
  const query = qs.parse(location.search, {
    ignoreQueryPrefix: true
  });
  const showDetail = query.detail === 'true';
  return (
    <div>
      <h1>소개</h1>
      <p>이 프로젝트는 리액트 라우터 기초를 실습해 보는 예제 프로젝트입니다.</p>
      {showDetail && (
        <p>
          detail 값을 {query.detail} 갑으로 설정하셨군요? 전체 query는{' '}
          {location.search} 입니다.
        </p>
      )}
    </div>
  );
};

export default About;
