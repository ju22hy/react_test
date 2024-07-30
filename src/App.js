import './App.css';
import Header from './components/Header';
import Section from './components/Section';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import { sectionProps } from './constants/json';
import UseState from './components/UseState';

// console.log(sectionProps);

const App = () => {
  return (
    <div className="App">
      {/* header */}
      {/* <Sidebar /> */}
      {/* <Header /> */}
      {/* section slider */}
      {/* <Section title="slider" color="lightblue" /> */}
      {/* section product */}
      {/* <Section title="product" color="aqua" /> */}
      {/* section blog */}
      {/* <Section
        title="blog"
        color="indigo"
        contents="slider contents"
        articles={['sl_1', 'sl_2', 'sl_3']}
      /> */}
      {/* 프롭스 하나하나 작성하기 */}
      {/* {sectionProps.map((section, idx) => (
        // <Section key={idx} section={section} />
        // ▲ json.js에 분리해서 section으로 묶기
        <Section
          key={idx}
          title={section.title}
          color={section.color}
          contents={section.contents}
          articles={section.articles}
        />
      ))} */}
      {/* 리액트에서 한 번 읽고 브라우저에서 한 번 읽어서 콘솔에 두 번 출력됨 */}
      {/* footer */}
      {/* <Footer /> */}

      <UseState />
    </div>
  );
};

export default App;
