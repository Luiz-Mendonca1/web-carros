import { Container } from "../../components/container"

export default function Home() {
  return (
    <>
    <Container>
    <section className="bg-white p-4 rounded-lg w-full max-w-3xl mx-auto flex items-center gap-2">
      <input type="text" placeholder="Digite o nome do carro" />
      <button className="bg-red-600 text-white px-4 py-2 rounded-lg text-lg font-medium">
        Buscar
      </button>
    </section>

    <h1 className="font-bold text-center mt-6 text-2xl mb-4">
      Carros Disponíveis
    </h1>

    <main className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      <section className="w-full bg-white rounded-lg">
        <img 
          className="w-full rounded-lg mb-2 max-h-72 hover:scale-105 transition-transform object-cover"
          src="https://i.pinimg.com/1200x/d8/86/30/d886302ac098b55939f417363c581e84.jpg" 
          alt="Carro" />
        <p className="font-bold mt-1 mb-2 px-2">IK280</p>
        <div className="flex flex-col px-2">
          <span className="text-zinc-700 mb-6">1998 - 200.100km</span>
          <strong className="text-black font-medium text-xl">R$ 10'000.01</strong>
        </div>

        <div className="w-full h-px bg-slate-200 my-2"></div>

        <div className="px-2 pb-2">
          <span className="text-zinc-700">
            Itaquera - SP
          </span>
        </div>
      </section>
    </main>
    </Container>
    </>
  )
}