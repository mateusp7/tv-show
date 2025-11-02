import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi, Mock } from 'vitest';
import { ShowPlayButton } from './ShowPlayButton';

vi.mock('@/hooks/useUrlParams');

const { useUrlParams } = await import('@/hooks/useUrlParams');

describe('ShowPlayButton', () => {
  it('should render the button with the correct season from URL', () => {
    (useUrlParams as Mock).mockReturnValue({
      searchParams: {
        get: (param: string) => (param === 'season' ? '2' : null),
      },
    });
    render(<ShowPlayButton />);
    expect(screen.getByRole('button', { name: /Assistir Temporada 2/i })).toBeInTheDocument();
  });

  it('should render the button with the default season when not in URL', () => {
    (useUrlParams as Mock).mockReturnValue({
      searchParams: {
        get: () => null,
      },
    });
    render(<ShowPlayButton />);
    expect(screen.getByRole('button', { name: /Assistir Temporada 1/i })).toBeInTheDocument();
  });
});
