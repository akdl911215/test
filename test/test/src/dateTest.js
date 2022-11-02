const state = [
  {
    summary: "뿌뿌뿌",
    create: "2022-03-02T03:23:26.000Z",
  },
  {
    summary: "뿌뿌뿌2",
    create: "2022-03-03T03:23:26.000Z",
  },
  {
    summary: "뿌뿌뿌3",
    create: "2022-03-04T03:23:26.000Z",
  },
];

console.log("state : ", state);

console.log(
  "map :",
  state.map((el) => {
    return {
      title: el.summary,
      date: el.create.substring(0, 10),
    };
  })
);
