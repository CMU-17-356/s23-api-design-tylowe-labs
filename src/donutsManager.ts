// manage the transcript database

import { InvalidParametersError } from "./server";

export type DonutID = number;
export type Donut = { DonutID: number, name: string, description: string, price: number, image: string, status: string };
// the database of transcript
let allDonuts: Donut[] = [];

export function initialize(): void {
  allDonuts = [];
  addDonut('Apple', "A yummy donut", 1.99, "https://example.com");
}

export function getAll(): Donut[] {
  return allDonuts;
}

// manages the student IDs
class DonutIDManager {
  private static lastUsedID = 0;

  public static newID(): number {
    this.lastUsedID++;
    return this.lastUsedID;
  }
}

// relies on freshness of studentIDs.
export function addDonut(name: string, description : string, price: number, image: string): DonutID {
  let newID = DonutIDManager.newID();
  const newDonut : Donut = {DonutID: newID, name: name, description: description, price: price, image: image, status: "available" };
  allDonuts.push(newDonut);
  return newID;
}

// gets transcript for given ID.  Returns undefined if missing
export function getDonut(donutID: number): Donut | undefined {
  return allDonuts.find(donut => (donut.DonutID == donutID));
}


// deletes student with the given ID from the database.
// throws exception if no such student.  (Is this the best idea?)
export function deleteDonut(donutID: DonutID): void {
  const index = allDonuts.findIndex(t => (t.DonutID == donutID));
  if (index == -1) {
    throw new Error(`no student with ID = ${donutID}`);
  }
  allDonuts.splice(index, 1);
}

