import { useState } from 'react'

function App() {
  const [selectedType, setSelectedType] = useState('')

  return (
    <main className="min-h-screen bg-poke-paper px-6 text-poke-ink">
      <div className="mx-auto flex min-h-screen max-w-5xl flex-col">
        <header className="flex items-center justify-between border-b border-stone-200 py-5">
          <a href="#home" className="flex items-center gap-2 font-bold tracking-tight" aria-label="Pokédex home">
            <span className="relative inline-flex size-7 items-center justify-center overflow-hidden rounded-full border-2 border-poke-ink bg-white">
              <span className="absolute inset-x-0 top-0 h-1/2 bg-poke-red" />
              <span className="absolute inset-x-0 top-1/2 h-0.5 -translate-y-1/2 bg-poke-ink" />
              <span className="z-10 size-2.5 rounded-full border-2 border-poke-ink bg-white" />
            </span>
            Pokédex
          </a>
          <span className="text-sm text-poke-muted">A little field guide</span>
        </header>

        <section id="home" className="grid flex-1 items-center gap-12 py-16 md:grid-cols-2 md:py-24">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-poke-red">Your adventure starts here</p>
            <h1 className="max-w-lg text-5xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl">
              Meet your next favorite <span className="text-poke-red">Pokémon.</span>
            </h1>
            <p className="mt-6 max-w-md text-lg leading-8 text-poke-muted">
              Explore a world of curious creatures, learn what makes each one special, and start building your dream team.
            </p>
            <a href="#discover" className="mt-8 inline-flex items-center gap-2 rounded-full bg-poke-red px-6 py-3 font-semibold text-white transition hover:bg-red-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-poke-red">
              Start exploring <span aria-hidden="true">→</span>
            </a>
          </div>

          <div className="flex justify-center" aria-hidden="true">
            <div className="relative flex size-64 items-center justify-center rounded-full bg-red-50 sm:size-80">
              <div className="relative size-40 overflow-hidden rounded-full border-[10px] border-poke-ink bg-white shadow-sm sm:size-48">
                <div className="absolute inset-x-0 top-0 h-1/2 bg-poke-red" />
                <div className="absolute inset-x-0 top-1/2 h-3 -translate-y-1/2 bg-poke-ink" />
                <div className="absolute left-1/2 top-1/2 size-16 -translate-x-1/2 -translate-y-1/2 rounded-full border-[9px] border-poke-ink bg-white sm:size-[4.5rem]" />
              </div>
              <span className="absolute right-5 top-8 size-3 rounded-full bg-yellow-300" />
              <span className="absolute bottom-8 left-8 size-2 rounded-full bg-poke-red" />
            </div>
          </div>
        </section>

        <section id="discover" className="mb-8 rounded-2xl border border-stone-200 bg-white p-5 sm:p-6">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="font-semibold">Ready to fill your Pokédex?</p>
              <p className="mt-1 text-sm text-poke-muted">Choose a type to start exploring.</p>
            </div>
            <span className="text-sm font-medium text-poke-red">Gotta catch ’em all!</span>
          </div>
          <div className="mt-5 flex flex-wrap gap-2">
            {['Fire', 'Water', 'Grass', 'Electric'].map((type) => (
              <button
                key={type}
                type="button"
                onClick={() => setSelectedType(type)}
                className="rounded-full border border-stone-200 px-4 py-2 text-sm font-medium transition hover:border-poke-red hover:text-poke-red focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-poke-red"
              >
                {type}
              </button>
            ))}
          </div>
          {selectedType && <p className="mt-4 text-sm">{selectedType}</p>}
        </section>

        <footer className="border-t border-stone-200 py-5 text-center text-xs text-poke-muted">Made for curious trainers</footer>
      </div>
    </main>
  )
}

export default App
