import { assertEquals } from "./test_deps.ts";
import clear from "./mod.ts";

Deno.test("Test It returns nothing", () => {
  assertEquals(clear(), undefined);
});
