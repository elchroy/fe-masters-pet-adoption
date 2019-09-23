import { readFileSync } from "fs";
import path from "path";
import { act } from "@testing-library/react";

const breeds = [
  { name: "German Shepherds" },
  { name: "Dog Breed 1" },
  { name: "Dog Breed 2" },
  { name: "Dog Breed 3" },
  { name: "Dog Breed 4" },
  { name: "Dog Breed 5" }
];

const doggos = JSON.parse(
  readFileSync(path.join(__dirname, "res.json")).toString()
);

export const ANIMALS = ["dog", "cat", "bird"];
export const _breeds = breeds;
export const _dogs = doggos.animals;

const mock = {
  breeds: jest.fn(() => {
    // jest.fn -> this is called a spy function
    return {
      then: cb => act(() => cb({ breeds }))
    };
  }),

  animals: jest.fn(() => {
    return {
      then: cb => act(() => cb(doggos))
    };
  })
};

export default mock;
