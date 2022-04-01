import { PropsWithChildren } from "react"

interface ICardProps {

}

function Card(props: PropsWithChildren<ICardProps>) {
  return (
    <div className="border border-gray-50 rounded-xl shadow-xl flex flex-col justify-center text-center w-full py-2 md:max-w-md">
      {props.children}
    </div>
  )
}

export default Card
