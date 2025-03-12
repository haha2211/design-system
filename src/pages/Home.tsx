import React from "react";
import { Link } from "react-router-dom";

const HomePage: React.FC = () => {
  return (
    <div>
      <h1>컴포넌트 리스트</h1>
      <ul>
        <li><Link to="/accordion">Accordion</Link></li>
        <li><Link to="/avatar">Avatar</Link></li>
        {/* 추가 컴포넌트 목록 */}
      </ul>
    </div>
  );
};

export default HomePage;
