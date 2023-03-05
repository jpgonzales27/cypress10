describe("empty spec", () => {
  it("chai", () => {
    const resutadoArray = [
      {
        name: "juan",
        username: "JuanUser",
        email: "juan@gmail.com",
        "Cel Phone": "111",
        status: "active",
      },
      {
        name: "ana",
        username: "anaUser",
        email: "ana@gmail.com",
        "Cel Phone": "222",
        status: "active",
      },
      {
        name: "mario",
        username: "marioUser",
        email: "mario@gmail.com",
        "Cel Phone": "333",
        status: "active",
      },
    ];
    const objectObjetivo = {
      name: "ana",
      username: "anaUser",
      email: "ana@gmail.com",
      "Cel Phone": 222,
      status: "active",
    };
    const objectObjetivoMal = {
      name: "Maria",
      username: "anaUser",
      email: "ana@gmail.com",
      "Cel Phone": "222",
      status: "active",
    };

    expect(resutadoArray).to.deep.include(objectObjetivo);
    // expect(resutadoArray).to.deep.include(objectObjetivoMal);
  });
});
