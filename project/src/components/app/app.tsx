import Main from '../../pages/main/Main';

type Settings = {
  placesCount: number,
}

function App(props: Settings): JSX.Element {
  return <Main placesCount={props.placesCount} />;
}

export default App;
