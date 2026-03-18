import { useParams } from "react-router-dom";

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  // fetch post by slug from your API
  console.log(slug);
  return (
    <section className="min-h-screen bg-gray-50 flex items-center">
      <h1 className="text-5xl text-red-500">{slug}</h1>
    </section>
  );
}
