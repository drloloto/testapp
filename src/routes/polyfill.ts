if (typeof document != "undefined" && !document.documentElement) {
  //ts-ignore
  document.documentElement = {
    styles: {},
  };
}
