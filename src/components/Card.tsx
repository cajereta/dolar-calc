import { Card } from "flowbite-react";

type CardProps = {
  dolar: number
  impPais: number
  impGanan: number
  total: number

  isLoading?: boolean
}

const CardRow = ({ dolar, impPais, impGanan, total, isLoading = false }: CardProps) => {

  const values = [impPais, impGanan, total]
  const labels = ["Impuesto PÁIS(30%)", "Imp. a las ganancias(45%)", "Total con impuestos"]
  const keys = [1, 2, 3]

  if (isLoading) {
    return (
      <Card>
        <div className=" flow-root truncate text-sm font-medium text-gray-900 dark:text-white">
          <p>Cargando...</p>
        </div>
      </Card>
    );
  }
  return (
    <Card className="mb-4">
      <div className=" flow-root">
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          {values.map((v, i) => (
            <li className="py-3 sm:py-4 " key={keys[i]}>
              <div className="flex space-x-4 justify-between">
                <div className="min-w-0">
                  <p className="truncate text-left text-sm font-medium text-gray-900 dark:text-white">
                    {labels[i]}
                  </p>
                </div>
                <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                  {v != 0 ? `${new Intl.NumberFormat("es-AR", { style: 'currency', currency: 'ARS' }).format(v)}` : "-"}
                </div>
              </div>
            </li>))}
          <li className="py-3 sm:py-4 " >
            <div className="flex space-x-4 justify-between">
              <div className="min-w-0">
                <p className="truncate text-sm font-bold text-gray-900 dark:text-white text-left">
                  {"Cotización dolar oficial".toUpperCase()}
                </p>
              </div>
              <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                {dolar != 0 ? `1 USD = $ ${dolar as number}` : "-"}
              </div>
            </div>
          </li>
        </ul>

      </div>
    </Card>
  )
}

export default CardRow