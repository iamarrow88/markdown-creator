const StringTransformer = {
  dataAttributeToCamelCase(subNamesArr) {
    return subNamesArr
      .map((str, index) => {
        if (index !== 0) {
          return str.charAt(0).toUpperCase() + str.slice(1);
        }
        return str;
      })
      .join("");
  },
};

export default StringTransformer;
