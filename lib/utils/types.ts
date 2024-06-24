/**
 * A record of sting key's to numbers
 */
export type EntryValue = Record<string, number>;

/**
 * A record of dynamically typed string key's to numbers
 */
export type TypedEntryValue<A = EntryValue> = Record<keyof A, number>;

export interface Bet<A = EntryValue, B = EntryValue> {
  /**
   * The ID of the player placing the bet
   */
  id: keyof A;
  /**
   * The value of the players bet
   */
  value: number;
  /**
   * The item the player is betting on
   */
  item: keyof B;
}
