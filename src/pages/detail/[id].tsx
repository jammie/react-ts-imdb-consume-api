import { Meta } from "@/layout/Meta";
import { Main } from "@/templates/Main";
import { useRouter } from "next/router";

const DetailPage = () => {
  const router = useRouter();
  const query = router.query;
  console.log(query);
  return (
    <Main
      meta={<Meta title="IMDB" description="Website for Consuming IMDB API." />}
    >
      <div className="rounded inline-block align-middle drop-shadow-lg border-2 border-bottom-solid border-blue-100 px-5 py-5 text-center">
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{query.fulltitle}</div>
        </div>
        <img
          className="aspect-square h-48 w-96"
          alt={query.title}
          src={query.image}
        />
      </div>

      <p>
      <ul> 
        <li>
          <h2><strong>Crew</strong></h2>
          <p>{query.crew}</p>
        </li>
        <li>
          <h2><strong>IMDB Rating</strong></h2>
          <p>{query.imdbRating}</p>
        </li>
      </ul>
      </p>
    </Main>
  );
};

export default DetailPage;
