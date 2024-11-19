// import { useState } from 'react';
import './App.css';
import PluginUI from './PluginUI';

function App() {
  // const url = new URL(window.location.href);
  // const initialTheme = url.searchParams.get('theme');

  // const [theme, setTheme] = useState(initialTheme || null);

  // window.addEventListener('message', (event) => {
  //   if (event.data.type === 'theme') {
  //     setTheme(event.data.content);
  //   }
  // });

  return (<>
    <PluginUI />
  </>);
}

export default App;
