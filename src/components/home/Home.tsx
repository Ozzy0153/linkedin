import Addpost from "../addPost/Addpost";
import Feeds from "../feeds/Feeds";
import Stories from "../stories/Stories";

function Home() {
  return (
    <>
      <Stories />
      <Addpost />
      <Feeds />
    </>
  );
}

export default Home;
