describe("hooks", () => {
  it("Typescript introdcution", () => {
    let stringVariable: string = "9";
    let numberVariable: number = 9;
    let booleanVariable: boolean = false;
    let anyVariable: any = "9";

    function addTwoNumbers(a: number, b: number): number {
      return a + b;
    }

    const addTwoNumbers2 = (a: number, b: number): number => a + b;

    interface User {
      username: string;
      password: string;
    }

    function printUserInformation(user: User): void {
      console.log(`this is the user name ${user.username} ${user.password}`);
    }

    const printUserInformation2 = (user: User): void =>
      console.log(`this is the user name ${user.username} ${user.password}`);
  });
});
