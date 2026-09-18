import TemplateCard from "@/components/TemplateCard";
import templates from "@/data/templates";

export default function Templates() {
  return (
    <main className="px-5 py-10 pt-24">
      <h1 className="text-3xl font-bold text-center">
        Choose Your Template
      </h1>

      <div className="mx-auto mt-10 grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {templates.map((template) => (
          <TemplateCard
            key={template.id}
            template={template}
          />
        ))}
      </div>
    </main>
  );
}