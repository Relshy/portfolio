export type Review = {
  /** The review, quoted as the client wrote it. */
  quote: string;
  /** Client's name or Discord username. */
  name: string;
  /** What was built for them. */
  project: string;
};

// Add verified client quotes here only after receiving permission to publish
// the quote and attribution.
export const reviews: Review[] = [];
