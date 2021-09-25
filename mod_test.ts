import { assertEquals } from "./test_deps.ts";
import clear from "./mod.ts";

Deno.test("Test Fibonacci", () => {
  assertEquals(clear(), undefined);
});
