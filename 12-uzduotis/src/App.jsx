import Header from "./components/Header";
import PostImage from "./components/PostImage";
import PostContent from "./components/PostContent";
import Box from "./components/Box";
import "./App.css";

export default function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <Header
            title="Labas, aš mokausi"
            link="src\components\images\Lion_pose_6649531395.jpg"
          />
        </div>
      </div>

      <div className="row">
        <div className="col-12 col-sm-6">
          <PostImage 
          link="src\components\images\sun.jpg"
          />
          <PostContent
          title="dabar as jau pakeistas"
          newText="++++++++++++++++++++++++++++++++++++++++"
          />
        </div>
        <div className="col-12 col-sm-6">
          <PostImage 
          link="src\components\images\moon.jpg"
          />
          <PostContent 
          title="ir dar vienas"
          newText="-----------------------------------------------------------"
          />
        </div>
      </div>

      <div className="row">
        <div className="col-6 mb-2 col-sm-3">
          <Box
          class="Box bg-danger"
          />
        </div>
        <div className="col-6 mb-2 col-sm-3">
          <Box
          class="Box bg-primary"
          />
        </div>
        <div className="col-6 mb-2 col-sm-3">
          <Box
          class="Box bg-info"
          />
        </div>
        <div className="col-6 mb-2 col-sm-3">
          <Box 
          class="Box bg-warning"
          />
        </div>
      </div>
    </div>
  );
}
