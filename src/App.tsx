import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './reducers/store';
import Home from './pages/home/Home';
import CharacterDetail from './pages/CharacterDetail';
import Header from './components/Header/Header';
import { Toaster } from 'react-hot-toast';

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
          <Route path="/" element={<Home />} />
          <Route path="/character/:id" element={<CharacterDetail />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
