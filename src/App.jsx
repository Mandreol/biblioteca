import useApi from './hooks/useApi';
import useUrlConstructor from './hooks/useUrlConstructor';

function App() {
  const URL_BASE = 'https://openlibrary.org/works/';
  const PARAM = 'OL15626917W.json';
  const [URL] = useUrlConstructor(URL_BASE, PARAM);
  const [data] = useApi(URL);
  if (URL) console.log(data);

  return <></>;
}

export default App;
