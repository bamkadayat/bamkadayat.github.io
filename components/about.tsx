export default function About({ dict }: { dict: any }) {
  return (
    <div>
      <div className="space-y-4 text-gray-300 leading-7">
        <p>{dict.about.intro}</p>

        <p>{dict.about.currentWork}</p>

        <p>{dict.about.design}</p>

        <p>{dict.about.personal}</p>
      </div>

      <div className="mt-12">
        <h3 className="text-xl font-semibold text-white mb-6">
          {dict.about.techTitle}
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {Object.entries(dict.about.technologies).map(([key, category]: [string, any]) => (
            <div key={key}>
              <h4 className="text-base font-semibold text-white mb-2">
                {category.title}
              </h4>
              <p className="text-sm text-gray-400 leading-relaxed">
                {category.items}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
