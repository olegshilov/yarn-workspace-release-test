module.exports = {
  branches: ["main", "next", "dev"],
  plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    "@semantic-release/changelog",
    [
      "@semantic-release/git",
      {
        assets: ["CHANGELOG.md"],
        message: "chore: release ${nextRelease.version} [ci skip]",
      },
    ],
  ],
};
