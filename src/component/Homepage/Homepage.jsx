import './homepage.scss';
// import Header from '../header/Header';
import Searchweather from '../weather-main/SearchWeather';

const Wrapper = () => {
  return (
    <div className="wrapper">
      {/* <Header /> */}
      <div className="container">
        <Searchweather />
        <Searchweather />
      </div>
    </div>
  );
};

export default Wrapper;
