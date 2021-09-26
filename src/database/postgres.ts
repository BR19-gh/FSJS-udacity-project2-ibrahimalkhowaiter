import { Client } from "pg";

import { User } from "../models";

// @ts-ignore
export let client 


if (process.env.ENV=="dev"){
   client = new Client({
    connectionString: process.env.DATABASE_URL,
  });
}
else if (process.env.ENV=="test"){
  client = new Client({
   connectionString: process.env.DATABASE_URL_TEST,
 });
}


async function createRootUser() {
  const password = process.env.ROOT_USER_PASSWORD || "password";
  try {
    const rootUser = await User.getById("root");
    if (rootUser) return;
    const user = new User("root", "Root", "Root", password, true);
    await user.create();
  } catch (e) {
    console.log("Error: Cannot Create Root User:", e);
  }
}

export async function connect() {
  try {
    await client.connect();
    await createRootUser();
  } catch (e) {
    console.log("Error: Cannot Start Connect to PG Database:", e);
  }
}

export async function disconnect() {
  try {
    await client.end();
  } catch (e) {
    console.log("Error: Cannot Terminate Connection to PG Database:", e);
  }
}
