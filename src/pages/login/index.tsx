import { Container } from "../../components/container";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import { Input } from "../../components/input";
import { useForm } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  email: z.string().email("Email inválido").nonempty("O email é obrigatório"),
  password: z.string().min(6, "A senha deve ter no mínimo 6 caracteres").nonempty("A senha é obrigatória"),
});

type FormData = z.infer<typeof schema>;

export default function Login() {
const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
  resolver: zodResolver(schema),
  mode: "onChange",
});

function onSubmit(data: FormData) {
  console.log(data);
}

  return (
    <Container>
    <div className="w-full min-h-screen flex justify-center items-center flex-col gap-4">
      <Link to='/' className="mb-6 max-w-sm w-full">
      <img className="w-full" src={logo} alt="" /></Link>

      <form onSubmit={handleSubmit(onSubmit)} className="bg-white max-w-xl w-full rounded-lg">
        <div className="mb-3">
        <Input
        type="email"
        placeholder="Digite seu email"
        name="email"
        error={errors.email?.message}
        register={register}
        ></Input>
        </div>

        <div className="mb-3">
        <Input
        type="password"
        placeholder="Digite sua senha"
        name="password"
        error={errors.password?.message}
        register={register}
        ></Input>
        </div>

        <button type="submit" className="bg-black text-white w-full rounded-md h-10 font-medium">Acessar</button>
      </form>
      <Link to="/register" className="mt-4  hover:underline">
      Não possui uma conta? Cadastre-se</Link>
    </div>
    </Container>
  )
}