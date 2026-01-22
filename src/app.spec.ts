import { describe, it, expect } from '@jest/globals';
import app from './app';
import { calculatediscount } from './config/utils';
 

describe.skip("App", () => {
  it("should correct return amout", () => {
    const discount = calculatediscount(200, 10);
    expect(discount).toBe(180);
  });
 
    it("should be defined", () => { 
    expect(app).toBeDefined();
    }); 
});