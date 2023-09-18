import { useState, useCallback, useEffect } from "react";
import { Label, TextInput } from "flowbite-react";
import CardRow from "./Card";

const Form = () => {
  const [valueUser, setValueUser] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [dolar, setDolar] = useState(0);

  const fetchDolar = useCallback(async () => {
    try {
      const response = await fetch("https://dolar-api.up.railway.app/");
      const data = await response.json();
      return Number(data[0].venta);
    } catch (error) {
      console.error("Error fetching dolar rate:", error);
      return 0;
    }
  }, []);

  useEffect(() => {
    setIsLoading(true);

    fetchDolar()
      .then((rate) => {
        setDolar(rate);
        setIsLoading(false);
      })
      .catch(() => {
        setIsLoading(false);
      });
  }, [fetchDolar]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setValueUser(Number(value));
  };

  const impuestoPais = Number((valueUser * dolar * 0.3))
  const impuestoGanancias = Number((valueUser * dolar * 0.45))
  const total = Number(valueUser * dolar + impuestoPais + impuestoGanancias)

  return (
    <>
      <div className="flex flex-col gap-4 mb-4">
        <div>
          <div className="mb-2 block text-left">
            <Label htmlFor="base" value="Cantidad de dólares (USD)" />
          </div>

          <TextInput
            id="base"
            sizing="md"
            type="number"
            placeholder="Ingrese cantidad de USD"
            onChange={handleChange}
            value={valueUser}
            min="0"
            className="[appearance:textfield] m-4 white dark:bg-gray-900"
          />
        </div>
      </div>
      <CardRow impPais={impuestoPais} impGanan={impuestoGanancias} total={total} dolar={dolar} isLoading={isLoading} />
    </>
  );
};

export default Form;