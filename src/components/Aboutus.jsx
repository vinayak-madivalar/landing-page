import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Aboutus = () => {
  const rows = [
    { id: 1, name: "1. Point no one" },
    { id: 2, name: "2. Point no two this" },
    { id: 3, name: "2. Point no two this" },
    { id: 4, name: "2. Point no two this" },
    { id: 5, name: "2. Point no two this" },
    { id: 6, name: "2. Point no two this" },
  ];

  const cardData = [
    {
      id: 1,
      cardTitle: "Cheapest TXs",
      cardDesc:
        "Exchange popular digital currencies at the cheapest possible transaction price",
      cardImg: "/dollar.png",
    },
    {
      id: 2,
      cardTitle: "CerTIK",
      cardDesc:
        "We are Audited by Certik. CertiK is the leading security-focused ranking platform to ",
      cardImg: "security.png",
    },
    {
      id: 3,
      cardTitle: "No Contract Sells",
      cardDesc: "No contract sells to fund the marketing wallets",
      cardImg: "call.png",
    },
    {
      id: 4,
      cardTitle: "CrossDex Support",
      cardDesc:
        "Exchange popular digital currencies at the cheapest possible transaction price",
      cardImg: "exchange.png",
    },
  ];

  return (
    <div id="aboutus" className="px-4 md:px-20 pt-20">
      <h1 className="font-firaCode text-4xl font-extrabold mb-6">
        Why <span className="text-[#f9d423]">MoonEX</span> ?
      </h1>
      <div className="bg-[#0c1b28] p-6">
        <table className="w-full shadow-sm bg-[#0c1b28] rounded-md ">
          <thead>
            <tr>
              <th className="p-3 text-center font-firaCode text-[#f9d423]">
                <div className="flex justify-center items-center">
                  <img
                    src="/comparison1.png"
                    alt="word"
                    width={130}
                    className="flex justify-center"
                  />
                </div>
              </th>
              <th className="flex justify-center items-center p-3 border-x border-[#D9D9D91A]">
                <div className="flex justify-center items-center">
                  <div className="flex gap-1 items-center">
                    <img src="/logo.png" alt="company name" width={30} />
                    <img src="/name.png" alt="company name" width={100} />
                  </div>
                </div>
              </th>
              <th className="p-3 ">
                <div className="flex justify-center items-center">
                  <img src="/name2.png" alt="company name" width={130} />
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.id}>
                <td className="border border-l-0 border-[#D9D9D91A] text-[#F0F0F0B2] p-3 pl-2">
                  {row.name}
                </td>
                <td className="border border-[#D9D9D91A] p-3 text-center">
                  <div className="flex justify-center items-center">
                    <img src="coolicon.png" alt="check" width={20} />
                  </div>
                </td>
                <td className="border border-r-0 border-[#D9D9D91A] p-3 text-center">
                  ❌
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div>
        <h1 className="font-firaCode text-4xl font-extrabold text-center py-12 ">
          Our <span className="text-[#f9d423] ">Features</span>
        </h1>
        <div className="grid justify-items-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {cardData.map((item) => (
            <Card key={item.id} className=" max-w-64">
              <CardHeader>
                <CardTitle>
                  {<img src={item.cardImg} alt={item.cardTitle} width={50} />}
                </CardTitle>
              </CardHeader>
              <CardContent>
                {
                  <h2 className="text-[#ECF1F0] font-semibold text-xl">
                    {item.cardTitle}
                  </h2>
                }
              </CardContent>
              <CardFooter>
                <p className="text-[#B6B6B6] text-sm">{item.cardDesc}</p>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
