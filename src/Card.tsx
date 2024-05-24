import { FormEvent, useState } from 'react'
import { FinalCard } from './components/FinalCard'

export function Card() {
  const [inputCar, setInputCar] = useState('')
  const [inputPlate, setInputPlate] = useState('')
  const [isFinished, setIsFinished] = useState(false)

  function TradeCard(event: FormEvent) {
    event.preventDefault()
    setIsFinished(true)
  }

  return (
    <div className="">
      {isFinished ? (
        <FinalCard />
      ) : (
        <main className="flex flex-col items-center gap-8 max-w-[720px] mt-16 mx-auto">
          <div className="bg-blue-400 flex flex-col items-center w-[347px] rounded-md pt-2.5 pb-10 px-[30px]">
            <h1 className="text-2xl uppercase tracking-[3px] my-6">
              Estacionamento
            </h1>

            <form action="" onSubmit={TradeCard} className="space-y-3.5 w-full">
              <div className="flex flex-col gap-2 text-center">
                <label htmlFor="MC" className="text-xl ">
                  Modelo do Carro
                </label>
                <input
                  type="text"
                  className="p-2 text-zinc-400 rounded-r w-full"
                  placeholder="Ex: Honda Civic"
                  name="MC"
                  value={inputCar}
                  required
                  onChange={(e) => setInputCar(e.target.value)}
                  id="MC"
                />
              </div>

              <div className="flex flex-col gap-2 text-center">
                <label htmlFor="PC" className="text-xl ">
                  Placa do Carro
                </label>
                <input
                  type="text"
                  className="p-2 text-zinc-400 rounded-r w-full"
                  name="PC"
                  required
                  value={inputPlate}
                  onChange={(e) => setInputPlate(e.target.value)}
                  placeholder="EX: SDC6D89"
                  id="PC"
                />
              </div>

              <div className="flex flex-col gap-2 text-center">
                <label htmlFor="PC" className="text-xl ">
                  Vagas disponíveis
                </label>
                <select
                  required
                  name=""
                  id=""
                  className="p-2 w-full text-zinc-400 rounded-r"
                  disabled={inputCar.length === 0 || inputPlate.length === 0}
                >
                  <option value="Selecione sua vaga">Selecione sua vaga</option>
                  <option value="Teste">S1</option>
                  <option value="Teste">N2</option>
                  <option value="Teste">K3</option>
                </select>
              </div>

              <button
                disabled={inputCar.length === 0 || inputPlate.length === 0}
                className="bg-orange-500 w-full p-4 rounded uppercase duration-200 hover:brightness-75 hover:duration-200"
              >
                RESERVAR vaga
              </button>
            </form>
          </div>
        </main>
      )}
    </div>
  )
}
