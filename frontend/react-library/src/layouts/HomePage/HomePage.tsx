import { Carousel } from "./components/Carousel";
import { ExploreTopbooks } from "./components/ExploreTopBooks";
import { Heroes } from "./components/Heroes";
import { LibraryServices } from "./components/LibraryServices";

export const HomePage = () => {
  return (
    <>
      <ExploreTopbooks />
      <Carousel />
      <Heroes />
      <LibraryServices />
    </>
  );
};
