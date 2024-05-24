import { FormEvent, useState } from 'react'
import Logo from './assets/Logo.svg'
import { UserRound, Lock, Database } from 'lucide-react'
import { Card } from './Card'

export function App() {
  const [isFinished, setIsFinished] = useState(false)

  function TradeCard(event: FormEvent) {
    event.preventDefault()
    setIsFinished(true)
  }

  return (
    <div className="">
      {isFinished ? (
        <Card />
      ) : (
        <main className="flex flex-col items-center gap-8 max-w-[720px] mt-5 mx-auto">
          <img src={Logo} alt="Logo" className="w-[347px]" />

          <div className="bg-blue-400 flex flex-col items-center w-[347px] rounded-md pt-2.5 pb-10 px-[30px]">
            <h1 className="text-2xl uppercase tracking-[3px] my-6">
              Portal do aluno
            </h1>

            <form action="" onSubmit={TradeCard} className="space-y-3.5 w-full">
              <div className="flex">
                <div className="bg-zinc-400 p-3.5 rounded-l">
                  <UserRound className="rounded-l" />
                </div>
                <input
                  type="text"
                  className="p-2 text-zinc-400 rounded-r w-full"
                  name=""
                  id=""
                />
              </div>

              <div className="flex ">
                <div className="bg-zinc-400 p-3.5 rounded-l">
                  <Lock className="rounded-l" />
                </div>
                <input
                  type="password"
                  required
                  className="p-2 text-zinc-400 rounded-r w-full"
                  name=""
                  id=""
                />
              </div>

              <div className="flex ">
                <div className="bg-zinc-400 p-3.5 rounded-l">
                  <Database className="rounded-l" />
                </div>
                <select
                  name=""
                  id=""
                  className="p-2 w-full text-zinc-400 rounded-r"
                >
                  <option value="Teste">CorporedRM</option>
                </select>
              </div>

              <button className="bg-orange-500 w-full p-4 rounded uppercase duration-200 hover:brightness-75 hover:duration-200">
                Acessar
              </button>
            </form>

            <div className="flex flex-col items-center justify-center mt-5 space-y-5">
              <a href="" className="font-bold hover:text-orange-500">
                Esqueceu sua senha?
              </a>

              <a href="" className="font-bold hover:text-orange-500">
                Pagamento On-line
              </a>
            </div>
          </div>
        </main>
      )}
    </div>
  )
}
