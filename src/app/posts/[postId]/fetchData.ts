interface Post {
  albumId: string;
  id: string;
  title: string;
  url: string;
  thumbnailUrl: string;
}
const fetchData = async (id: string) => {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/photos/" + id,
    {
      cache: "force-cache",
    }
  );
  const data: Post = await response.json();
  return data;
};
export default fetchData;
