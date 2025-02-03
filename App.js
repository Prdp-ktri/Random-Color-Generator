import ImageSlider from "./src/components/image-slider";
import RandomColor from "./src/components/random-color";

function App() {
  return (
    <div className="App">
      {/* Random Color Component */}
      {/* <RandomColor /> */}
      {/* <StarRating noOfStars={10} /> */}
      <ImageSlider url={"https://picsum.photos/v2/list"} page={1} limit={10} />
    </div>
  );
}
