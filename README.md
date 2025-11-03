# 🎬 TV Show Details – Technical Test

## Objective

Implement a web page for a TV show details screen, following the specifications provided in the technical test document.
The page should fill the entire screen, fetch data from the provided APIs, and allow navigation between seasons, episodes, and cast information.

### 🚀 Features

- Full-screen TV Show details page.
- Fetch TV show and episode data from the given APIs:
  - Show: https://agile-releases.s3.us-east-1.amazonaws.com/tests/tv-shows/SHOW123.json
  - Episodes: https://agile-releases.s3.us-east-1.amazonaws.com/tests/episodes/SHOW123.json
- Navigate between seasons (T1, T2, T3).
- Access the Cast section.
- Click an episode card to display its details (no playback required).
- Responsive layout (mobile-first).
- Smooth interaction effects and micro-animations.
- Deployed online for easy review.

### 🧠 Tech Stack

| Layer  | Technology          | Description                     |
|------------|--------------------|---------------------------------|
| Framework  | NextJs  | Fast dev environment and modular architecture |
| Language   | Typescript         | Type-safe, maintainable code     |
| Styling     | Tailwind CSS        | Framwork CSS utility-first |
| Fonts     | Nunito        |  |
| Testing     | Vitest + React Testing Library + MSW        | Unit and integration tests with API mocking |
| Deployment     | Vercel        | Cloud-based hosting as requested |

### ⚙️ Installation & Usage

1. Clone the repo

```bash
git clone https://github.com/mateusp7/tv-show.git
cd tv-show
```

2. Install dependencies

```bash
pnpm install
```

3. Run de project

```bash
pnpm dev
```

4. Build for production

```bash
pnpm build && pnpm start
```

5. Run tests

```bash
pnpm test
```

### ☁️ Deployment

You can preview the project at:
👉 [https://tv-show-seven-hazel.vercel.app/]

### 💬 Author

Mateus Paulo
Frontend Developer — React / Next.js / TypeScript / Node.JS <br />
📧 [mateuspaulo1337@gmail.com] <br />
🌐 [[LinkedIn](https://www.linkedin.com/in/mateus-paulo-51aa9521a/)]
