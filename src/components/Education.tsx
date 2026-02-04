interface EducationItem {
  institution: string
  degree: string
  years: string
  logo?: string
}

const Education = () => {
  const education: EducationItem[] = [
    {
      institution: "Manipal University Jaipur",
      degree: "B.Tech in Computer Science (Specialization in AI/ML)",
      years: "2023 - 2027",
      logo: "/Manipal-University-Jaipur-Logo.jpg"
    },
    {
      institution: "Shivedale School",
      degree: "Higher Secondary",
      years: "2020 - 2022",
      logo: "/shivedale-school.jpg"
    }
  ]

  return (
    <section className="mb-12 sm:mb-16" id="education">
      <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 relative after:content-[''] after:absolute after:bottom-[-0.5rem] after:left-0 after:w-12 after:h-[3px] after:bg-accent-blue">
        Education
      </h2>
      <div className="space-y-4 sm:space-y-6">
        {education.map((item, index) => (
          <div key={index} className="flex items-start gap-3 sm:gap-4">
            <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gray-300 dark:bg-[#2a2e33] flex-shrink-0 flex items-center justify-center overflow-hidden">
              {item.logo ? (
                <img src={item.logo} alt={item.institution} className="w-full h-full object-cover" />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-accent-blue to-[#0b5ed7]"></div>
              )}
            </div>
            <div className="flex-1 flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 sm:gap-2">
              <div className="flex-1">
                <h3 className="text-lg sm:text-xl font-semibold mb-1">{item.institution}</h3>
                <p className="text-sm sm:text-base text-gray-600 dark:text-secondary-gray">{item.degree}</p>
              </div>
              <div className="text-sm sm:text-base text-gray-600 dark:text-secondary-gray sm:text-right">
                {item.years}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Education
