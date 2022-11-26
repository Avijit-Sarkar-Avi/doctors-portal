import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './Routes/Routes/Router';



function App() {
  return (
    <div className='max-w-[1440px] mx-auto bg-hero bg-no-repeat bg-cover bg-center bg-fixed'>
      <RouterProvider router={router}></RouterProvider>
      <Toaster></Toaster>
    </div>
  );
}

export default App;
