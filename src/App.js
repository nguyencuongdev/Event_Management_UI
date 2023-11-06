import { Fragment } from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

import { StoreProvider } from './store';
import { GlobalStyle } from './components';
import { public_route } from './routes';

function App() {
  return (
    <BrowserRouter>
      <StoreProvider>
        <GlobalStyle>
          <div className="App">
            <Routes>
              {public_route.map((route, index) => {
                let Layout = Fragment;
                if (route.layout) Layout = route.layout;
                const Element = route.element;
                return <Route path={route.path} key={index}
                  element={
                    <Layout>
                      <Element />
                    </Layout>}
                >
                </Route>
              })}
            </Routes>
          </div>
        </GlobalStyle>
      </StoreProvider>
    </BrowserRouter>
  );
}

export default App;
