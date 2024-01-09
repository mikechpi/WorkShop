import { sum } from "./sum";

describe('Sum', () => {
  it("successful addition", () => {
    expect(sum(5, 5)).toEqual(10);
  }) 
})
