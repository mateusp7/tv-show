// src/services/getEpisodes.int.test.ts
import { describe, expect, it } from "vitest";

describe("getShow", () => {
  it("should return more than 0 Cast", async () => {
    const getEpisodes = (await import("./getShow")).default;

    const { show } = await getEpisodes();

    expect(Array.isArray(show.Cast)).toBe(true);
    expect(show.Cast.length).toBeGreaterThan(0)
  });

  it("should return more than 0 Genres", async () => {
    const getEpisodes = (await import("./getShow")).default;

    const { show } = await getEpisodes();

    expect(Array.isArray(show.Genres)).toBe(true);
    expect(show.Genres.length).toBeGreaterThan(0);
  });

  it("should return valid URL image", async () => {
    const getEpisodes = (await import("./getShow")).default;

    const { show } = await getEpisodes();
    expect(show.Images.Background).toContain("https://")
  });

  it("should return content in Synopsis", async () => {
    const getEpisodes = (await import("./getShow")).default;

    const { show } = await getEpisodes();
    expect(show.Synopsis).toBeTruthy();
  });

  it("should return content in Title", async () => {
    const getEpisodes = (await import("./getShow")).default;

    const { show } = await getEpisodes();
    expect(show.Title).toBeTruthy();
  });

  it("should return content in Year", async () => {
    const getEpisodes = (await import("./getShow")).default;

    const { show } = await getEpisodes();
    expect(show.Year).toBeTruthy();
  });
});
