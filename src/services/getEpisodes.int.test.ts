// src/services/getEpisodes.int.test.ts
import { describe, expect, it } from "vitest";

describe("getEpisodes", () => {
  it("should return 2 episodes", async () => {
    const getEpisodes = (await import("./getEpisodes")).default;

    const { episodes } = await getEpisodes();

    expect(Array.isArray(episodes)).toBe(true);
    expect(episodes).toHaveLength(2);
    expect(episodes[0]).toMatchObject({
      ID: "EPI-01",
      Title: expect.any(String),
      EpisodeNumber: 1,
      SeasonNumber: 1,
    });
  });
});
