'use client'

export function PromoBanner() {

  const lotrQuotes: { quote: string; author: string; movie: string }[] = [
    {
      quote: "One does not simply walk into Mordor.",
      author: "🗡️ Boromir",
      movie: "The Fellowship of the Ring",
    },
    {
      quote: "Po-ta-toes. Boil 'em, mash 'em, stick 'em in a stew.",
      author: "🌿 Samwise Gamgee",
      movie: "The Two Towers",
    },
    {
      quote: "Fool of a Took!",
      author: "🧙 Gandalf",
      movie: "The Fellowship of the Ring",
    },
    {
      quote: "Nobody tosses a dwarf.",
      author: "⚒️ Gimli",
      movie: "The Fellowship of the Ring",
    },
    {
      quote: "Certainty of death. Small chance of success. What are we waiting for?",
      author: "⚒️ Gimli",
      movie: "The Return of the King",
    },
    {
      quote: "I think I'm quite ready for another adventure.",
      author: "🗺️ Bilbo Baggins",
      movie: "The Fellowship of the Ring",
    },
    {
      quote: "Second breakfast? I don't think he knows about second breakfast.",
      author: "🍄 Pippin",
      movie: "The Fellowship of the Ring",
    },
    {
      quote: "I don't know half of you half as well as I should like.",
      author: "🗺️ Bilbo Baggins",
      movie: "The Fellowship of the Ring",
    },
    {
      quote: "When in doubt, follow your nose.",
      author: "🧙 Gandalf",
      movie: "The Fellowship of the Ring",
    },
    {
      quote: "YOU SHALL NOT PASS!",
      author: "🧙 Gandalf",
      movie: "The Fellowship of the Ring",
    },
  ]

  const getRandomQuote = (quotes: string[]): string => {
    return quotes[Math.floor(Math.random() * quotes.length)]
  }

  // usage
  const quotes = getRandomQuote(lotrQuotes)

  return (
    <div className="mx-4 mt-3 mb-0 flex flex-col gap-2 px-4 py-2.5 rounded-lg bg-zinc-500/10 border border-zinc-500/20 text-sm md:flex-row md:items-center">
      <div className="flex items-center gap-2 min-w-0">
        <span className="w-1.5 h-1.5 rounded-full bg-zinc-400 shrink-0" />
        <p className="text-xs text-zinc-200/90">
          "{quotes.quote}" — {quotes.author}, {quotes.movie}
        </p>
      </div>
    </div>
  )
}
