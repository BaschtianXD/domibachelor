import { PropsWithChildren } from "react"

interface ICardProps {

}

function Card(props: PropsWithChildren<ICardProps>) {
  return (
    <div className="border border-gray-50 rounded-xl shadow-xl flex flex-col justify-center text-center w-full py-4 md:max-w-lg">
      {props.children}
    </div>
  )
}

export default Card
