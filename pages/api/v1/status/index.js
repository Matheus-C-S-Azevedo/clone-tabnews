function status(resquest, response) {
  response.status(200).json({ Resposta: "Tudo ok" });
}

export default status;
