import { setupServer } from "msw/node";
import { handlers } from "./handlers";

// Centraliza os handlers da aplicacao durante os testes.
export const server = setupServer(...handlers);
