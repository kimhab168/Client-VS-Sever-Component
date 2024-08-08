interface Post {
  albumId: string;
  id: string;
  title: string;
  url: string;
  thumbnailUrl: string;
}
const fetchData = async (): Promise<Post[]> => {
  const response = await fetch("https://jsonplaceholder.typicode.com/photos", {
    cache: "force-cache", //defualt
  });
  if (!response.ok) {
    throw new Error("Network response was Bad");
  }
  const data = await response.json();
  return data;
};
export default fetchData;
