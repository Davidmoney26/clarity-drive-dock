import {
  Clarinet,
  Tx,
  Chain,
  Account,
  types
} from 'https://deno.land/x/clarinet@v1.0.0/index.ts';
import { assertEquals } from 'https://deno.land/std@0.90.0/testing/asserts.ts';

Clarinet.test({
  name: "Ensure can create new ride",
  async fn(chain: Chain, accounts: Map<string, Account>) {
    // Test implementation
  }
});

Clarinet.test({
  name: "Ensure can book available ride",
  async fn(chain: Chain, accounts: Map<string, Account>) {
    // Test implementation
  }
});
