import { BadgeCheck } from 'lucide-react'

export function FinalCard() {
  return (
    <section className="w-full max-w-[335px] mt-16 mx-auto flex flex-col text-center">
      <div className=" flex flex-col gap-4 bg-blue-400 p-10 rounded-lg items-center">
        <BadgeCheck size={59} color="white" />

        <p>1 vaga foi reservada com sucesso</p>
        <p>Você tem 30:00 para está no local.</p>
      </div>
    </section>
  )
}
