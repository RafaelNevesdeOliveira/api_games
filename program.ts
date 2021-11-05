import StartUp from "./startUp";

let port = "4000";

StartUp.app.listen(port, function () {
  console.log(`servidor rodando na porta: ${port}`);
});
 