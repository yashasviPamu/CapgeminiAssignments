let laptop = {
  model: ME2018S,
  desk_no: 5,
  name: "Epsilon",
};

function getTicket() {
  console.log(
    `Mr ${laptop.name}, Your laptop model: ${laptop.model} is assigned to desk no ${laptop.desk_no}. Description : System is slow.`
  );
}

getTicket();
