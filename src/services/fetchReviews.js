import dayjs from "dayjs";

export async function getReviews() {
  // simulate promise delay
  await new Promise((r) => setTimeout(r, 2000));
  let tmp = new dayjs();
  return [
    {
      title: "This project is amazing!",
      details: "Lorem Ipsum dolor sit amet Lorem Ipsum dolor sit amet",
      postingDate: tmp.subtract(7, "days"),
    },
    {
      title: "This project is amazing!",
      details: "Lorem Ipsum dolor sit amet Lorem Ipsum dolor sit amet",
      postingDate: tmp.subtract(50, "minutes"),
    },
    {
      title: "This project is amazing!",
      details: "Lorem Ipsum dolor sit amet Lorem Ipsum dolor sit amet",
      postingDate: tmp.subtract(11, "hours"),
    },
    {
      title: "This project is amazing!",
      details: "Lorem Ipsum dolor sit amet Lorem Ipsum dolor sit amet",
      postingDate: tmp.subtract(11, "seconds"),
    },
  ];
}
