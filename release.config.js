module.exports = {
  branches: ["main", "next", "dev"],
  preset: "conventionalcommits",
  plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    "@semantic-release/changelog",
    [
      "@semantic-release/git",
      {
        assets: ["CHANGELOG.md", "package.json", "yarn.lock"],
        message:
          "chore(release): ${nextRelease.gitTag}\n\n${nextRelease.notes}\n\n[skip ci]",
      },
    ],
    "@semantic-release/npm",
    "@semantic-release/github",
  ],
};
