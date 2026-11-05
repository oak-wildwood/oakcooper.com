export function About() {
  return (
    <section id="about" aria-labelledby="about-heading" className="bg-ink-800">
      <div className="mx-auto grid max-w-[1600px] grid-cols-12 gap-6 section-x py-16 lg:py-24">
        <div className="col-span-12 lg:col-span-3">
          <h2 id="about-heading" className="label">
            02 &nbsp;/&nbsp; ABOUT
          </h2>
          <div className="mt-5 h-0.5 w-11 bg-gold" />
        </div>

        <div className="col-span-12 lg:col-span-9">
          <p className="max-w-[48ch] font-read text-[clamp(1.35rem,2.2vw,1.75rem)] font-light leading-[1.45] text-paper">
            Product-minded senior fullstack engineer. Hand me an unfamiliar
            codebase and a loosely-defined problem and I turn it into shipped,
            tested, monitored code.
          </p>

          <p className="mt-6.5 max-w-[64ch] font-read text-[17px] font-light leading-[1.7] text-paper-mute">
            I work on both sides of the API. Most of the last four years went
            into one Vue app and the NestJS services behind it: building
            features from the UI through GraphQL to the domain services,
            helping pull data access out of overgrown resolvers into dedicated
            microservices, co-leading the move to Vue&nbsp;3, and rebuilding
            the deployment and observability underneath all of it.
          </p>

          <p className="mt-5 max-w-[64ch] font-read text-[17px] font-light leading-[1.7] text-paper-mute">
            Before that came over a decade of .NET — ASP.NET, C#, SQL Server —
            and then Angular, which is why I have opinions about the API a
            component has to consume and the component an API has to serve.
            The work I am proudest of is invisible: the error that reaches
            Datadog with enough context to act on, the form that survives a
            dropped connection, the test suite that runs in half the time it
            used to.
          </p>
        </div>
      </div>
    </section>
  );
}
