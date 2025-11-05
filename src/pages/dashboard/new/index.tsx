import { Container } from "../../../components/container"
import PainelHeader from "../../../components/painelHeader"

import { FiUpload } from "react-icons/fi"
import { useForm } from "react-hook-form"
import z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Input } from "../../../components/input"

const schema = z.object({
  name: z.string().nonempty("O nome do carro é obrigatório"),
  year: z.string().nonempty("O ano do carro é obrigatório"),
  model: z.string().nonempty("O modelo do carro é obrigatório"),
  km: z.string().nonempty("A quilometragem do carro é obrigatória"),
  price: z.string().nonempty("O preço do carro é obrigatório"),
  city: z.string().nonempty("A cidade do carro é obrigatória"),
  whatsapp: z.string().nonempty("O whatsapp do vendedor é obrigatório").refine ((value) => {
    const regex = /^\d{11,12}$/;
    return regex.test(value);
  }, { message: "Número de WhatsApp inválido. Deve conter apenas números e ter 10 ou 11 dígitos."}),
  description: z.string().nonempty("A descrição do carro é obrigatória"),
});

type FormData = z.infer<typeof schema>;

export default function New() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: "onChange",
  });

  function onSubmit(data: FormData) {
    console.log(data);
  }

  return (
    <>
    <Container>
      <PainelHeader />
      <div className="w-full bg-white p-3 rounded-lg flex flex-col sm:flex-col items-center gap-2 ">
        <button className="border-2 w-48 rounded-lg  p-4 flex items-center justify-center hover:border-gray-400 cursor-pointer h-32">
          <div className="absolute cursor-pointer">
            <FiUpload size={40} className="text-gray-600"/>
          </div>
          <div className="cursor-pointer">
            <input type="file" accept="image" className="opacity-0 cursor-pointer"/>
          </div>
        </button>
      </div>
      <div className="w-full bg-white p-3 rounded-lg flex flex-col sm:flex-col items-center gap-2 mt-2 ">
        <form onSubmit={handleSubmit((onSubmit))} className="w-full">
          <div></div>
          <div className="mb-3">
            <p className="mb-2 font-medium">Nome do carro</p>
            <Input
              type="text"
              placeholder="Digite o nome do carro"
              name="name"
              error={errors.name?.message}
              register={register}
            ></Input>
          </div>

          <div className="mb-3">
            <p className="mb-2 font-medium">Modelo</p>
            <Input
              type="text"
              placeholder="Digite o modelo do carro"
              name="model"
              error={errors.model?.message}
              register={register}
            ></Input>
          </div>


          <div className="flex w-full items-center gap-4 mb-3 flex-row ">
            <div className="w-full">
            <p className="mb-2 font-medium">Ano</p>
            <Input
              type="text"
              placeholder="Digite o ano do carro"
              name="year"
              error={errors.year?.message}
              register={register}
            ></Input>
            </div>
            <div className="w-full">
            <p className="mb-2 font-medium">Quilometragem</p>
            <Input
              type="text"
              placeholder="Digite a quilometragem do carro"
              name="km"
              error={errors.km?.message}
              register={register}
            ></Input>
            </div>
            </div>
            
            <div className="flex w-full items-center gap-4 mb-3 flex-row ">
            <div className="w-full">
            <p className="mb-2 font-medium">Telefone</p>
            <Input
              type="text"
              placeholder="Digite o seu numero"
              name="whatsapp"
              error={errors.whatsapp?.message}
              register={register}
            ></Input>
            </div>
            <div className="w-full">
            <p className="mb-2 font-medium">Cidade</p>
            <Input
              type="text"
              placeholder="Digite sua cidade"
              name="city"
              error={errors.city?.message}
              register={register}
            ></Input>
            </div>
            </div>

          <div className="mb-3">
            <p className="mb-2 font-medium">Preço</p>
            <Input
              type="text"
              placeholder="Digite o preço do carro"
              name="price"
              error={errors.price?.message}
              register={register}
            ></Input>
          </div>

            <div className="mb-3">
            <p className="mb-2 font-medium">Descrição</p>
            <textarea 
            className="border-2 w-full rounded-md h-24 px-2"
              placeholder="Digite a descrição do carro"
              {...register("description")}
              name="description"
              id="description"
            ></textarea>
            {errors.description && (
              <p className="text-red-600 mt-1">{errors.description.message}</p>
            )}

            </div>

            <button type="submit" className="bg-black text-white w-full rounded-md h-10 font-medium">Cadastrar carro</button>
            
          </form>
      </div>
    </Container>
    </>
  )
}