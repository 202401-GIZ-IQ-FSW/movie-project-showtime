import { fetchData } from '@/_utils/fetchData'
import ReadMore from '@/components/ReadMore'
import MovieCard from '../../../components/moviesPage/MovieCard'

const getGenderText = (gender) => {
  switch (gender) {
    case 1:
      return 'Female'
    case 2:
      return 'Male'
    case 3:
      return 'Non-binary'
    default:
      return 'Not set / not specified'
  }
}

const getAge = (birthday) => {
  const currentYear = new Date().getFullYear();
  const birthYear = new Date(birthday).getFullYear();
  return currentYear - birthYear;
};

const ActorInfo = async ({ params }) => {
  const { actorId } = params
  const actorInfo = await fetchData(`/person/${actorId}`)
  const relatedMovies = await fetchData(`/person/${actorId}/movie_credits`);

  return (
    <div className="px-10 lg:pt-28 pt-8 pb-8 overflow-hidden bg-black/100">
      <div className="flex md:flex-row items-start flex-col md:gap-10 md:flex-1">
        <div className="w-64 md:w-72 h-80 mb-20">
          <img
            src={`https://image.tmdb.org/t/p/w500/${actorInfo.profile_path}`}
            alt={actorInfo.name}
            className="object-cover rounded-2xl "
          />
        </div>
        <div className="flex md:flex-1 flex-col">
          <h1 className="font-Roboto text-white/95 font-extrabold lg:text-4xl text-xl text-darkRed md:tracking-wider mb-6">
            {actorInfo.name}
          </h1>
          <div>
            <div className="mb-6">
              <p className="flex flex-row flex-wrap items-center gap-1 font-Roboto text-gray-500 text-sm mb-2">
                <span className="text-customeYellow font-bold font-Roboto text-sm">
                  Birthday:
                </span>
                {actorInfo.birthday}
                <span className='font-Roboto text-gray-500 text-sm'>({getAge(actorInfo.birthday)}) years old</span>
              </p>
              <p className="flex flex-row items-center gap-2 font-Roboto text-gray-500 text-sm mb-2">
                <span className="text-customeYellow font-bold font-Roboto text-sm">
                  Gender:
                </span>
                {getGenderText(actorInfo.gender)}
              </p>
              <p className="flex flex-row items-center gap-2 font-Roboto text-gray-500 text-sm">
                <span className="text-customeYellow font-bold font-Roboto text-sm">
                  Popularity:
                </span>
                {actorInfo.popularity}
              </p>
            </div>
            <div className="flex flex-col">
              <p className="font-Roboto font-semibold text-lg text-white/90 tracking-wide mb-4">
                Biography:
              </p>
              <p className="font-Roboto text-white/70 leading-6 text-sm font-normal mb-6">
                <ReadMore bio={actorInfo.biography}/>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-24 mb-10">
        <h2 className="text-2xl font-bold font-Roboto border-b border-customeYellow text-customeYellow mb-7">Known For</h2>
        <div className="flex flex-col lg:flex-row items-center gap-14">
          {relatedMovies.cast.slice(0,5).map((movie) => (
            <div key={movie.id} className="inline-block ">
              <MovieCard movie={movie} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ActorInfo
