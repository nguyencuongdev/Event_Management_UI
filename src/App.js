import { Route, Routes, BrowserRouter } from 'react-router-dom';

import { public_route } from './routes';
import { Fragment } from 'react';


function App() {
  return (
    <BrowserRouter>
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
    </BrowserRouter>
  );
}

export default App;
