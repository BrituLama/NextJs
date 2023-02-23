import Image from "next/image";

// export async function generateStaticParams(){
//     const data = await fetch(
//         `https://api.themoviedb.org/3/movie/${movie}?api_key=c34191c7d3d281e13ff6c609df0321a4`
//       );
//     const res =  await res.json()
//     return res.results.map((movie) => ({
//         movie:toString(movie.id)
//     }))gi
// }

export default async function MovieDetail({ params }) {
  const { movie } = params;
  const imagePath = "https://image.tmdb.org/t/p/original";
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/${movie}?api_key=c34191c7d3d281e13ff6c609df0321a4`
  );

  const res = await data.json();
  return (
    <div>
      <div>
        <h2 className="text-2xl">{res.title}</h2>
        <h2 className="text-lg">{res.release_date}</h2>
        <h2>Runtime: {res.runtime}</h2>
        <h2 className="text-sm bg-green-600 inline-block my-2 py-2 px-4 rounded">
          {res.status}
        </h2>
        <Image
          unoptimized
          className="my-12 w-full"
          src={imagePath + res.backdrop_path}
          width={1000}
          height={1000}
          priority
        />
        <p>{res.overview}</p>
      </div>
    </div>
  );
}
