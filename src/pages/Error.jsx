import React from 'react';
import Header from "../components/UI/Header/Header.jsx";

const Error = () => {
  return (
    <div>
      <Header
        arrowBack={true}
        contains={['Такой страницы не существует']}
        id={['']}
        onClick={null}
      />
      <div className="window">
        <h1>Такой страницы нет. Как ты вообще на неё попал?</h1>
      </div>
    </div>
  );
};

export default Error;