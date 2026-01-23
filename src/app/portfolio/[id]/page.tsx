import { client } from "@/sanity/lib/client";
import Image from "next/image";
import Link from "next/link";

async function getPortfolioById(id: string) {
  return client.fetch(
    `
    *[_type == "portfolio" && _id == $id][0]{
      _id,
      title,
      client,
      category,
      description,
      keyResults,
      "imageUrl": image.asset->url
    }
  `,
    { id }
  );
}

export default async function PortfolioDetailsPage(props: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await props.params;

  const project = await getPortfolioById(id);

  if (!project) {
    return (
      <div className="p-10 text-center text-xl">Case Study not found.</div>
    );
  }

  return (
    <section className="py-24 bg-white">
      {/* Back Button */}
      <div className="px-4 mb-10">
        <Link
          href="/#portfolio"
          className="inline-flex items-center gap-2 px-5 py-3 bg-gray-800 text-white rounded-full 
             hover:bg-black transition-all text-sm sm:text-base"
        >
          <i className="ri-arrow-left-line text-lg sm:text-xl"></i>
          Back
        </Link>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {project.title}
          </h1>

          <p className="text-lg text-purple-600 font-semibold">
            {project.client}
          </p>

          <div className="text-gray-500 text-sm mt-3">
            Category:{" "}
            <span className="text-gray-800 font-medium capitalize">
              {project.category}
            </span>
          </div>
        </div>

        {/* Thumbnail */}
        <div className="w-full mb-12">
          <Image
            src={project.imageUrl}
            alt={project.title}
            width={1200}
            height={600}
            className="w-full max-h-[500px] object-cover rounded-xl shadow-lg"
          />
        </div>

        {/* Description */}
        <p className="text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto mb-16 text-center">
          {project.description}
        </p>

        {/* Key Results */}
        <div className="max-w-4xl mx-auto bg-white rounded-2xl p-10 shadow-lg border border-gray-100">
          <h2 className="text-3xl font-bold mb-6 text-gray-900 text-center">
            Key Results
          </h2>

          <ul className="space-y-4">
            {project.keyResults.map((item: string, index: number) => (
              <li
                key={index}
                className="flex items-center text-gray-700 text-lg"
              >
                <div className="w-3 h-3 bg-green-500 rounded-full mr-4"></div>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
