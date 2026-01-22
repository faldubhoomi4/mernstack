/* eslint-disable @typescript-eslint/no-floating-promises, @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access */
import { describe, it, expect } from "@jest/globals";
import request from "supertest";
import app from "../../src/app";
describe("POST/auth/register", () => {
    describe("given all fields", ()=>{
        it("should return 201 status code", async()=>{
            // AAA
            // Arrange
            const userData={
               firstname :"bhoomi",     
               lastname: "faldu",   
               email:"faldubhoomi4@gmailk.com",
               password:"bhoomi678",
            }
            // Act
            const response = await request(app)
            .post("/auth/register").send(userData);  
 
            // Assert 
            expect(response.statusCode).toBe(201);
        } );
        it("should valid jason", async()=>{
             // Arrange
            const userData={
               firstname :"bhoomi",     
               lastname: "faldu",   
               email:"faldubhoomi4@gmailk.com",
               password:"bhoomi678",
            }
            // Act
            const response = await request(app)
            .post("/auth/register").send(userData);  
 
            // Assert  applicaton/json
            expect((response.headers as Record <string, string>)["content-type"]).toEqual(expect.stringContaining("json"));
        });
        it("should persist the user in database", async()=>{
           
             // Arrange
            const userData={
               firstname :"bhoomi",     
               lastname: "faldu",   
               email:"faldubhoomi4@gmailk.com",
               password:"bhoomi678",
            }
            // Act
            const response = await request(app)
            .post("/auth/register").send(userData);  
 
            // Assert  applicaton/json
            expect((response.headers as Record <string, string>)["content-type"]).toEqual(expect.stringContaining("json"));
        });


 
    describe("filed are missing", ()=>{


    });  
});



});

