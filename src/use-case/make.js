export const makeUseCase = (fn) => ({ gateway, presenter, input }) =>
  presenter(fn({ gateway, input }));

export const test = makeUseCase(({ gateway, input }) => {
  console.info("test", input);
  return { isOK: gateway.ok() };
});

const gateway = {
  ok: () => true
};
const presenter = ({ isOK }) => (isOK ? "yes" : "no");

console.info(test({ gateway, presenter, input: "hello world" }));
