import Chip from "../components/chip"
import type { Experience } from "../modules/experience"

interface ExperienceProps {
  data: Experience[] | undefined
  isSpanish: boolean
}

export default function Experience({ data, isSpanish }: ExperienceProps): React.JSX.Element {
  return (
    <section aria-labelledby="experience-heading">
      <h1 id="experience-heading" className="sr-only">
        {isSpanish ? 'Experiencia laboral' : 'Work experience'}
      </h1>
      <div className="flex flex-col gap-8 md:gap-10">
        {data?.map((experience: Experience): React.JSX.Element => (
          <article key={experience.place} className="xl:grid xl:grid-cols-4 flex max-xl:flex-col">
            <header className="lg:col-span-1">
              <time dateTime={`${experience.startDate}/${experience.endDate ?? 'present'}`} className="text-sm md:text-base text-[var(--gray)]">
                {`${experience.startDate} - ${experience.endDate ?? (isSpanish ? 'Presente' : 'Present')}`}
              </time>
            </header>
            <div className="lg:col-start-2 lg:col-span-3 flex flex-col">
              <div className="mb-4">
                <h2 className="text-lg lg:text-xl">{experience.place}</h2>
                <h3 className="text-sm md:text-base text-[var(--gray)]">{experience.position}</h3>
              </div>
              <p className="text-[var(--gray)]">{experience.description}</p>

              <ul className="flex flex-wrap gap-2 mt-3.5" role="list">
                {experience.stack.map((stack: string): React.JSX.Element => (
                  <li key={stack} role="listitem">
                    <Chip>
                      <span className="text-sm md:text-base">{stack}</span>
                    </Chip>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}