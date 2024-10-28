import { useParams } from "react-router-dom";

// import data
import Data from "../data/project.json";

// import component
import Project from "../component/Project";

function Detail() {
  const {id} = useParams();
  return (
    <>
      {Data.filter((selId) =>selId.nameAbbr === id)
      .map((work) => (
        <Project
          nameAbbr={work.nameAbbr}
          bg={work.bg}
          summary={work.summary}
          client={work.client}
          period={work.period}
          keyword={work.keyword}
          name={work.name}
          url={work.url}
          duties={work.duties}
          story={work.story}
          images={work.images}
          detail={work.detail}
        />
      ))}
    </>
  );
}
export default Detail;
