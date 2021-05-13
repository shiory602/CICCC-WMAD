// parent
import Box from './Box.jsx';
import './App.css';

export default function App() {
  return (
    <div className="App">
      <Box
      imageUrl="https://img.icons8.com/ios-filled/50/000000/maxcdn.png"
      text="MDN"
      />
      <Box
      imageUrl="https://img.icons8.com/pastel-glyph/64/000000/download-from-cloud--v1.png"
      text="Download"
      />
    </div>
  );
}