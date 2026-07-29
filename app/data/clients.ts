export interface Client {
  id: number;
  name: string;
  logo: string;
}

const clients: Client[] = [
  { id: 1, name: "AQ", logo: "/clients/aq.jpg" },
  { id: 2, name: "Bilcare Research", logo: "/clients/bilcareresearch.jpg" },
  { id: 3, name: "Bosch", logo: "/clients/bosh.jpg" },
  { id: 4, name: "Gainwell", logo: "/clients/gainwell.jpg" },
  { id: 5, name: "Gedia", logo: "/clients/gedia.jpg" },
  { id: 6, name: "Hira Technologies", logo: "/clients/hira.jpg" },
  { id: 7, name: "Jun Auto", logo: "/clients/junauto.jpg" },
  { id: 8, name: "Knest", logo: "/clients/knest.jpg" },
  { id: 9, name: "Magna", logo: "/clients/magna.jpg" },
  { id: 10, name: "Maico", logo: "/clients/maico.jpg" },
  { id: 11, name: "Metalyst", logo: "/clients/metalyst.jpg" },
  { id: 12, name: "POSCO", logo: "/clients/posco.jpg" },
  { id: 13, name: "Raj Process", logo: "/clients/rajprocess.jpg" },
  { id: 14, name: "Uno Minda", logo: "/clients/unominda.jpg" },
  { id: 15, name: "Wilo", logo: "/clients/wilo.jpg" },
];

export default clients;