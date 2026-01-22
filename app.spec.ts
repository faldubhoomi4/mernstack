import {describe, it, expect} from "@jest/globals";
import app from "./src/app";
import request from "supertest";
import {calculateDiscount} from "./src/utils/calculateDiscount"; 

describe("App", () => { 
  it("should correct return amount", () => {
   const discount = calculateDiscount(100, 10);
   expect(discount).toBe(10);
  });
  it("should return 200 on user registration", async () => {
    const response = await request(app).get("/");
    expect(response.statusCode).toBe(200);
  });
});  