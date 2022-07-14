import dayjs from "dayjs";

export async function fetchProjects() {
  // simulate promise delay
  await new Promise((r) => setTimeout(r, 2000));
  let tmp = new dayjs();
  return [
    {
      title: "Bored Ape Yacht",
      address: "0x1ABC7154748D1CE5144478CDEB574AE244B939B5",
      reviewsNumber: "1k",
      postingDate: tmp.subtract(7, "days"),
    },
    {
      title: "Eagle Eye",
      address: "0x1ABC7154748D1CE5144478CDEB574AE244B939B5",
      postingDate: tmp.subtract(50, "minutes"),
    },
    {
      title: "NFT aggregator",
      address: "0x1ABC7154748D1CE5144478CDEB574AE244B939B5",
      reviewsNumber: "1k",
      postingDate: tmp.subtract(11, "hours"),
    },
    {
      title: "DeFi Lender",
      address: "0x1ABC7154748D1CE5144478CDEB574AE244B939B5",
      reviewsNumber: "1k",
      postingDate: tmp.subtract(11, "seconds"),
    },
  ];
}
