import { Container } from "../../components/container"
import { useEffect, useState } from "react"

// import das imagens presentes em src/assets para popular a lista inicial
import img1 from "../../assets/00eebe091d6651497270e95eb9b47ddd.jpg"
import img2 from "../../assets/27c21c651c01b529dc0cc7e05e9c1b18.jpg"
import img3 from "../../assets/29260c5db26310c1d64ee9a04de675a5.jpg"
import img4 from "../../assets/4850d21b7715a2d083abba0c76632f81.jpg"
import img5 from "../../assets/5573a08772e92ec85f6dd4daa843ab1d.jpg"
import img6 from "../../assets/67ce989e63b0c3ebda9c490dfb69370c.jpg"
import img7 from "../../assets/73f257c176e7625dc2a575a183f8a199.jpg"
import img8 from "../../assets/d5ec7fc7fce181d52e35c67342c115ba.jpg"

type Car = {
  id: number;
  name: string;
  model: string;
  year: string;
  km: string;
  price: string;
  city: string;
  whatsapp?: string;
  description?: string;
  image?: string | null;
}

export default function Home() {
  const [cars, setCars] = useState<Car[]>([])

  useEffect(() => {
    try {
      const raw = localStorage.getItem('cars')
      const parsed = raw ? JSON.parse(raw) : []

      // se não houver carros salvos, popular usando as imagens em assets
      if (!parsed || parsed.length === 0) {
        const seedImages = [img1, img2, img3, img4, img5, img6, img7, img8]
        const seeded = seedImages.map((imgSrc, idx) => ({
          id: 1000 + idx,
          name: `Carro ${idx + 1}`,
          model: `Modelo ${idx + 1}`,
          year: `20${10 + (idx % 10)}`,
          km: `${(idx + 1) * 1000}`,
          price: `${(idx + 1) * 10000}`,
          city: "Cidade Exemplo",
          whatsapp: undefined,
          description: `Descrição do carro ${idx + 1}`,
          image: imgSrc,
        }))

        localStorage.setItem('cars', JSON.stringify(seeded))
        setCars(seeded)
        return
      }

      setCars(parsed)
    } catch (err) {
      console.error('Erro ao ler carros do localStorage', err)
      setCars([])
    }
  }, [])

  return (
    <>
    <Container>
    <section className="bg-white p-4 rounded-lg w-full max-w-3xl mx-auto flex items-center gap-2">
      <input type="text" placeholder="Digite o nome do carro" className="w-full px-2 py-2 border-2 rounded-md" />
      <button className="bg-red-600 text-white px-4 py-2 rounded-lg text-lg font-medium">
        Buscar
      </button>
    </section>

    <h1 className="font-bold text-center mt-6 text-2xl mb-4">
      Carros Disponíveis
    </h1>

    <main className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {cars.length === 0 && (
        <div className="w-full col-span-full text-center text-zinc-600">Nenhum carro cadastrado ainda.</div>
      )}

      {cars.map((car) => (
        <section key={car.id} className="w-full bg-white rounded-lg">
          <img 
            className="w-full rounded-lg mb-2 max-h-72 hover:scale-105 transition-transform object-cover"
            src={car.image ?? 'https://via.placeholder.com/600x400?text=Sem+imagem'}
            alt={car.name} />
          <p className="font-bold mt-1 mb-2 px-2">{car.name}</p>
          <div className="flex flex-col px-2">
            <span className="text-zinc-700 mb-6">{car.year} - {car.km}</span>
            <strong className="text-black font-medium text-xl">R$ {car.price}</strong>
          </div>

          <div className="w-full h-px bg-slate-200 my-2"></div>

          <div className="px-2 pb-2">
            <span className="text-zinc-700">
              {car.city}
            </span>
          </div>
        </section>
      ))}
    </main>
    </Container>
    </>
  )
}