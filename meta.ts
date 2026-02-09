export interface VendorSkillMeta {
  official?: boolean;
  source: string;
  skills: Record<string, string>; // sourceSkillName -> outputSkillName
}

/**
 * Repositories to clone as submodules and generate skills from source
 */
export const submodules = {
  react: "https://github.com/facebook/react/tree/main/packages/react",
  next: "https://github.com/vercel/next.js/tree/canary/packages/next",
  vite: "https://github.com/vitejs/vite",
  reactuse: "https://github.com/siberiacancode/reactuse",
  pnpm: "https://github.com/pnpm/pnpm.io",
  tsdown: "https://github.com/rolldown/tsdown",
  vitest: "https://github.com/vitest-dev/vitest",
};

/**
 * Already generated skills, sync with their `skills/` directory
 */
export const vendors: Record<string, VendorSkillMeta> = {
  "react-best-practices": {
    official: true,
    source: "https://github.com/vercel-labs/agent-skills",
    skills: {
      "react-best-practices": "react-best-practices",
    },
  },
  "web-design-guidelines": {
    source: "https://github.com/vercel-labs/agent-skills",
    skills: {
      "web-design-guidelines": "web-design-guidelines",
    },
  },
};

/**
 * Hand-written skills with Anthony Fu's preferences/tastes/recommendations
 */
export const manual = ["siberiacancode"];
