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
        <h1>Такой страницы нет.</h1>
        <h1>Нажмите на стрелочку Назад</h1>
      </div>
    </div>
  );
};

export default Error;