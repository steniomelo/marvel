import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './reducers/store';
import Home from './pages/home/Home';
import CharacterDetail from './pages/CharacterDetail';
import Header from './components/Header/Header';
import { Toaster } from 'react-hot-toast';
import Footer from 'components/Footer/Footer';

const App = () => {
  return (
    <Provider store={store}>
      <Toaster position="bottom-center"
        toastOptions={{
          error: {
            style: {
              background: 'red',
              color: 'white'
            },
          },
        }} />

      <Router>
        <Header />
          <Routes>
            <Route index={true} path="/" element={<Home />} />
            <Route path="/heroi/:id" element={<CharacterDetail />} />
          </Routes>
        <Footer />
      </Router>
    </Provider>
  );
};

export default App;
