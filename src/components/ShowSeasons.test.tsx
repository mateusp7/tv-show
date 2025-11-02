import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi, Mock } from 'vitest';
import { ShowSeasons } from './ShowSeasons';
import getEpisodes from '@/services/getEpisodes';

vi.mock('@/services/getEpisodes');
vi.mock('./ui/SeasonItem', () => ({
  SeasonItem: ({ seasonNumber }: { seasonNumber: number }) => (
    <div>Temporada {seasonNumber}</div>
  ),
}));

describe('ShowSeasons', () => {
  it('should render a list of seasons based on the episodes', async () => {
    const mockEpisodes = {
      episodes: [
        { SeasonNumber: 1 },
        { SeasonNumber: 1 },
        { SeasonNumber: 2 },
        null,
      ],
    };
    (getEpisodes as Mock).mockResolvedValue(mockEpisodes);

    render(await ShowSeasons());

    expect(screen.getByText('Temporada 1')).toBeInTheDocument();
    expect(screen.getByText('Temporada 2')).toBeInTheDocument();
    expect(screen.queryByText('Temporada 3')).not.toBeInTheDocument();
  });
});
