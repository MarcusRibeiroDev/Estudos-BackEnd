import app from "./app.js";
//import conection from "./infra/conection.js";

const PORT = process.env.PORT || 3001;

// // Conectar DB
// conection.connect((err) => {
//   if (err) {
//     console.log(err);
//     return;
//   } else {
//     console.log("Conexão feita com sucesso!");
//     app.listen(PORT, () => {
//       console.log(`Example app listening on port ${PORT}`);
//     });
//   }
// });

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
