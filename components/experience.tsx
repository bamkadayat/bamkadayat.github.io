export default function Experience({ dict }: { dict: any }) {
  return (
    <div>
      <div className="space-y-12">
        {dict.experience.items.map((item: any, index: number) => (
          <div key={index} className="relative pl-8 border-l-2 border-gray-700">
            <div className="absolute -left-[9px] top-0 w-4 h-4 bg-[#FFA324] rounded-full"></div>

            <div className="mb-2">
              <h3 className="text-xl font-semibold text-white">{item.title}</h3>
              <div className="flex flex-wrap gap-3 mt-2 text-sm">
                <span className="text-gray-400">{item.location}</span>
                <span className="text-gray-500">•</span>
                <span className="text-[#FFA324]">{item.date}</span>
              </div>
            </div>

            <p className="text-gray-400 leading-relaxed mt-3">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
