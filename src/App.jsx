import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Articles from './components/Articles';
import Header from './components/Header';
import SingleArticle from './components/SingleArticle';

function App() {
  

  return (

      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Articles />} />
          <Route path="/articles/:article_id" element={<SingleArticle />} />
        </Routes>
      </Router>
    
  );
}

export default App
