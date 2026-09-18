import Image from "next/image";
import Link from "next/link";

const TemplateCard = ({ template }) => {
  return (
    <div className="overflow-hidden rounded-2xl border border-pink-200 bg-white shadow-sm">
      
      <Image
        src={template.image}
        alt={template.name}
        width={500}
        height={700}
        className="h-72 w-full object-cover"
      />

      <div className="p-4">
        <h3 className="text-lg font-semibold">
          {template.name}
        </h3>

        <p className="mt-1 text-sm text-gray-500">
          {template.type}
        </p>

        <Link
          href={`/create?template=${template.id}`}
          className="mt-4 block w-full rounded-xl bg-pink-500 py-2 text-center font-medium text-white"
        >
          Use Template
        </Link>
      </div>

    </div>
  );
};

export default TemplateCard;