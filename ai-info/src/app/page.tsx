const timeline = [
  {
    era: "1950s",
    title: "Early Ideas",
    detail:
      "Alan Turing formalized the question of whether machines can think, and early symbolic programs attempted logic puzzles.",
  },
  {
    era: "1980s",
    title: "Expert Systems",
    detail:
      "Rule-based software captured human knowledge to diagnose problems in domains like medicine and manufacturing.",
  },
  {
    era: "1990s-2000s",
    title: "Statistical Learning",
    detail:
      "Advances in data collection and computing power popularized machine learning techniques for perception tasks.",
  },
  {
    era: "2010s",
    title: "Deep Learning",
    detail:
      "Layered neural networks trained on massive datasets began to outperform humans in image recognition and games.",
  },
  {
    era: "2020s",
    title: "Foundation Models",
    detail:
      "Large language and multimodal models enable general-purpose reasoning, content generation, and autonomous agents.",
  },
];

const pillars = [
  {
    name: "Knowledge",
    description:
      "Collecting and representing facts, rules, and relationships so systems can reason about the world.",
  },
  {
    name: "Learning",
    description:
      "Using data to improve performance over time through supervised, unsupervised, or reinforcement techniques.",
  },
  {
    name: "Reasoning",
    description:
      "Deriving conclusions, making plans, and weighing trade-offs to achieve goals under uncertainty.",
  },
  {
    name: "Perception",
    description:
      "Interpreting sensory input such as text, images, audio, or sensor data to understand context.",
  },
  {
    name: "Interaction",
    description:
      "Communicating with people and other systems using natural language, recommendations, or actions.",
  },
];

const applications = [
  {
    title: "Healthcare",
    detail:
      "AI assists with diagnostics, drug discovery, and personalized treatment plans informed by patient data.",
  },
  {
    title: "Finance",
    detail:
      "Algorithms detect fraud, automate trading strategies, and tailor financial products for customers.",
  },
  {
    title: "Creative Work",
    detail:
      "Generative models draft text, design visuals, and compose music, expanding the creative toolkit for humans.",
  },
  {
    title: "Autonomous Systems",
    detail:
      "Robotics and self-driving platforms enable machines to sense, decide, and act in the physical world.",
  },
  {
    title: "Everyday Productivity",
    detail:
      "Digital assistants, smart search, and recommendation engines help prioritize tasks and surface relevant information.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-slate-100">
      <main className="mx-auto flex min-h-screen w-full max-w-5xl flex-col gap-16 px-6 py-20 sm:px-10">
        <header className="flex flex-col gap-6 rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur">
          <span className="text-sm font-medium uppercase tracking-[0.35em] text-sky-300">
            Artificial Intelligence
          </span>
          <h1 className="text-4xl font-semibold leading-tight text-white sm:text-5xl">
            What is AI?
          </h1>
          <p className="max-w-3xl text-lg text-slate-200 sm:text-xl">
            Artificial intelligence is the science and engineering of building
            machines that can perform tasks that typically require human
            intelligence, such as perceiving the world, understanding language,
            making decisions, and learning from experience. These systems
            combine data, algorithms, and computing power to act with purpose in
            digital or physical environments.
          </p>
        </header>

        <section className="grid gap-8 rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur sm:grid-cols-2">
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-semibold text-white">
              Narrow vs. General Intelligence
            </h2>
            <p className="text-slate-200">
              Today&apos;s AI is mostly{" "}
              <strong className="text-white">narrow AI</strong>, designed to
              excel at specific tasks like language translation or object
              recognition. Researchers also explore{" "}
              <strong className="text-white">
                artificial general intelligence (AGI)
              </strong>
              , which would match or exceed human capability across diverse
              domains. AGI remains a long-term goal, but rapid progress in
              foundation models shows how systems can adapt to many tasks with
              minimal new training.
            </p>
          </div>
          <div className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-slate-900/60 p-6">
            <h3 className="text-lg font-semibold text-white">Why Now?</h3>
            <ul className="space-y-3 text-slate-200">
              <li>• Vast datasets capturing language, images, and behaviors</li>
              <li>• Specialized hardware that accelerates neural networks</li>
              <li>• Advances in algorithms like transformers and diffusion</li>
              <li>• Cloud platforms that scale experimentation globally</li>
            </ul>
          </div>
        </section>

        <section className="flex flex-col gap-8">
          <h2 className="text-3xl font-semibold text-white">
            Core Capabilities
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {pillars.map((pillar) => (
              <article
                key={pillar.name}
                className="flex flex-col gap-3 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:border-sky-400/80"
              >
                <h3 className="text-lg font-semibold text-white">
                  {pillar.name}
                </h3>
                <p className="text-sm text-slate-200">{pillar.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="flex flex-col gap-8">
          <h2 className="text-3xl font-semibold text-white">How AI Learns</h2>
          <div className="grid gap-6 rounded-3xl border border-white/10 bg-slate-900/70 p-10 backdrop-blur sm:grid-cols-2">
            <div className="space-y-4 text-slate-200">
              <h3 className="text-xl font-semibold text-white">
                Machine Learning Paradigms
              </h3>
              <p>
                Most AI systems learn patterns from data, improving as they see
                more examples and feedback. Three common paradigms drive modern
                progress:
              </p>
              <ul className="space-y-2">
                <li>
                  <strong className="text-white">Supervised learning:</strong>{" "}
                  Models map inputs to labeled outputs, powering tasks like spam
                  detection.
                </li>
                <li>
                  <strong className="text-white">Unsupervised learning:</strong>{" "}
                  Algorithms discover hidden structure or compress data without
                  explicit labels.
                </li>
                <li>
                  <strong className="text-white">
                    Reinforcement learning:
                  </strong>{" "}
                  Agents learn through trial, error, and rewards, enabling
                  robotics and game-playing breakthroughs.
                </li>
              </ul>
            </div>
            <div className="space-y-4 text-slate-200">
              <h3 className="text-xl font-semibold text-white">
                Generative Intelligence
              </h3>
              <p>
                Generative AI models, such as large language models and diffusion
                models, learn to produce new content that resembles their
                training data. They underpin chatbots, image creators, and code
                assistants, and they raise important questions about authorship,
                bias, and safe deployment.
              </p>
              <p>
                Responsible AI practice ensures systems are fair, transparent,
                and aligned with human values through evaluation, governance, and
                continual monitoring.
              </p>
            </div>
          </div>
        </section>

        <section className="flex flex-col gap-8">
          <h2 className="text-3xl font-semibold text-white">
            Milestones Timeline
          </h2>
          <div className="relative space-y-6 rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur">
            <div className="absolute left-6 top-14 bottom-10 hidden w-px bg-white/20 sm:block" />
            <div className="space-y-10">
              {timeline.map((entry) => (
                <div
                  key={entry.era}
                  className="relative grid gap-4 sm:grid-cols-[auto_1fr] sm:gap-8"
                >
                  <div className="flex items-center gap-3">
                    <span className="rounded-full border border-sky-400/60 bg-sky-400/20 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-sky-100">
                      {entry.era}
                    </span>
                    <span className="hidden h-px w-20 bg-white/20 sm:block" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3 className="text-lg font-semibold text-white">
                      {entry.title}
                    </h3>
                    <p className="text-sm text-slate-200">{entry.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="flex flex-col gap-8">
          <h2 className="text-3xl font-semibold text-white">
            Where AI Shows Up Today
          </h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {applications.map((item) => (
              <article
                key={item.title}
                className="flex flex-col gap-3 rounded-2xl border border-white/10 bg-slate-900/70 p-6 backdrop-blur transition hover:border-sky-400/70"
              >
                <h3 className="text-lg font-semibold text-white">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-200">{item.detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="flex flex-col gap-6 rounded-3xl border border-white/10 bg-gradient-to-br from-sky-600/80 via-indigo-600/70 to-blue-700/80 p-10 text-slate-50">
          <h2 className="text-3xl font-semibold">How to Stay Informed</h2>
          <p className="text-lg">
            AI evolves quickly. Follow cross-disciplinary research, experiment
            with tools, and engage in conversations about ethics and policy.
            Understanding both the capabilities and the limitations of AI helps
            societies deploy the technology responsibly.
          </p>
          <div className="flex flex-wrap gap-3 text-sm">
            <span className="rounded-full border border-white/30 bg-white/10 px-4 py-2">
              Read: arXiv AI category
            </span>
            <span className="rounded-full border border-white/30 bg-white/10 px-4 py-2">
              Explore: Hugging Face models
            </span>
            <span className="rounded-full border border-white/30 bg-white/10 px-4 py-2">
              Practice: Kaggle competitions
            </span>
            <span className="rounded-full border border-white/30 bg-white/10 px-4 py-2">
              Discuss: Partnership on AI frameworks
            </span>
          </div>
        </section>

        <footer className="border-t border-white/10 pt-10 text-sm text-slate-300">
          Built to answer a simple question with a comprehensive perspective on
          artificial intelligence.
        </footer>
      </main>
    </div>
  );
}
