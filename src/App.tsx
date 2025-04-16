import Card from "./components/Card";
import Tabs from "./components/Tab";

function App() {
  return (
    <div className="min-h-screen bg-gray-50 p-8 flex justify-center items-start">
      <Card image="/house-image-1.jpg" title="Palm Harbor" location="2699 Green Valley, Highland Lake, FL" price={3440} label="HOUSE" />

      <Tabs />
    </div>
  );
}

export default App;
