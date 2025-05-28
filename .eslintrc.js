module.exports = {
  // extends: 'next/core-web-vitals',
  // rules: {
  //   'import/no-anonymous-default-export': 'off', // Kikapcsolja az anonim export figyelmeztetést
  // }

  extends: ["next/core-web-vitals"],
  rules: {
    "react/no-unescaped-entities": "off",
    "@next/next/no-script-component-in-head": "off",
    "@next/next/no-before-interactive-script-outside-document": "warn",
    "react-hooks/exhaustive-deps": "warn",
    "import/no-anonymous-default-export": "off",
  },
};
