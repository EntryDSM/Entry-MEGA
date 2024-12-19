module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "type-enum": [
      2,
      "always",
      [
        "FEAT",
        "FIX",
        "DOCS",
        "STYLE",
        "DESIGN",
        "TEST",
        "REFACTOR",
        "BUILD",
        "CI",
        "PERF",
        "CHORE",
        "RENAME",
        "REMOVE",
      ],
    ],
    "colon-not-include": [2, "always"],
  },
  plugins: [
    {
      rules: {
        "colon-not-include": ({ header }) => {
          return [
            !header.includes(" :: "),
            `커밋 메시지에 "::"이 포함되면 안 됩니다.`,
          ];
        },
        "type-enum": ({ header }) => {
          const types = new Set([
            "FEAT",
            "FIX",
            "DOCS",
            "STYLE",
            "DESIGN",
            "TEST",
            "REFACTOR",
            "BUILD",
            "CI",
            "PERF",
            "CHORE",
            "RENAME",
            "REMOVE",
          ]);
          const type = header.split(" :: ")[0];
          return [types.has(type), `${type}은(는) 허용되지 않는 타입입니다.`];
        },
      },
    },
  ],
};
