export type CommissionVideo = {
  /** Short name for the clip, e.g. "Combat system for an RPG". */
  title: string;
  /** Optional one-line context: what the commission was. */
  description?: string;
  /** YouTube video id — the part after "v=" in the URL, e.g. "abc123XYZ". */
  youtubeId?: string;
  /** Or a local file dropped into site/public/videos/, e.g. "/videos/combat-demo.mp4". */
  src?: string;
};

// Add your commission clips here. Each entry needs either a youtubeId
// (upload the clip to YouTube, unlisted works fine) or a src pointing at
// an mp4 in site/public/videos/. The "Commission clips" section on /work
// only appears once this list has at least one entry.
//
// Example:
//   {
//     title: "Merge system for a tower defense game",
//     description: "Drag-to-merge units with rarity tiers and save support.",
//     youtubeId: "dQw4w9WgXcQ",
//   },
export const commissionVideos: CommissionVideo[] = [];
