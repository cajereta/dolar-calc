'use client';

import { Accordion } from 'flowbite-react';

const AccordionDolar = () => {
  return (
    <Accordion collapseAll >
      <Accordion.Panel>
        <Accordion.Title className="text-gray-600">
          ¿Qué es el dólar tarjeta o turista en Argentina?
        </Accordion.Title>
        <Accordion.Content className="text-left">
          <p className="mb-2 text-gray-700 dark:text-gray-100">

            El dólar tarjeta, también conocido como «dólar turista», es el tipo de cambio que se aplica en los consumos de tu tarjeta de crédito en dólares. Se trata de una sobretasa del 30% (Impuesto PAIS) que se le agrega al precio de lo que cotiza el dólar oficial sumado a la retención 45% por el Impuesto a las Ganancias.
          </p>
          <p>
            Además, si los gastos en la tarjeta superan los 300 dólares se suma el Impuesto a los Bienes Personales de un 25%.
          </p>

        </Accordion.Content>
      </Accordion.Panel >
      <Accordion.Panel>
        <Accordion.Title className="text-gray-600">
          ¿Qué es el impuesto PAÍS?
        </Accordion.Title>
        <Accordion.Content className="text-left">
          <p className="mb-2 text-gray-700 dark:text-gray-100">
            El Impuesto PAIS es un tributo de emergencia establecido en febrero de 2020 a través de la Ley N° 27.541 de Solidaridad Social y Reactivación Productiva en el marco de la Emergencia Pública. Lo recaudado es distribuido de la siguiente forma:
          </p>
          <ul className="list-disc pl-5 text-gray-700 dark:text-gray-100">
            <li> 70% para financiar programas a cargo de Anses y PAMI.</li>
            <li> 30% Para financiar obras de vivienda social, del fideicomiso Fondo de Integración Sociourbana, prestaciones del PAMI, obras de infraestructura económica y fomento del turismo nacional.</li>
          </ul>
          <p className="text-gray-700 dark:text-gray-100">
            Para mas información&nbsp;
            <a
              className="text-cyan-600 hover:underline dark:text-cyan-500"
              href="https://www.afip.gob.ar/impuesto-pais/caracteristicas/definicion.asp"
            >
              sobre el impuesto a país haz click aquí
            </a>
            .
          </p>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title className="text-gray-600">
          ¿Qué es el impuesto a las ganancias?
        </Accordion.Title>
        <Accordion.Content className="text-left">
          <p className="mb-2 text-gray-700 dark:text-gray-100">
            Es un impuesto nacional que recae sobre los haberes o rentas obtenidos durante el año calendario. El mismo se calcula mediante la aplicación de una alícuota progresiva sobre la ganancia neta (ingresos menos gastos deducibles) obtenida durante el período fiscal de liquidación.

          </p>

          <p className="text-gray-700 dark:text-gray-100">
            Para mas información&nbsp;
            <a className="text-cyan-600 hover:underline dark:text-cyan-500" href="https://www.afip.gob.ar/gananciasYBienes/ganancias/conceptos-basicos/ganancias.asp"
            > sobre el impuesto a las ganancias haz click aquí </a>
            .
          </p>
        </Accordion.Content>
      </Accordion.Panel>

    </Accordion >
  )
}

export default AccordionDolar

