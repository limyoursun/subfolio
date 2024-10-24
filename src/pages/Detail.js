import { useParams } from "react-router-dom";
import Data from "../data/project.json";
import Project from "../component/Project";

function Detail() {
  const {id} = useParams();

  return (
    <>
    {Data.filter((selId) =>selId.nameAbbr === id)
    .map((work) => (
      <Project
        client={work.client}
        nameAbbr={work.nameAbbr}
        name={work.name}
        duties={work.duties}
        category={work.category}
        story={work.story}
        images={work.images}
        url={work.url}
        thumb={work.thumb}
        bg={work.bg}
        period={work.period}
      />
    ))}
    </>
  );
}
export default Detail;
