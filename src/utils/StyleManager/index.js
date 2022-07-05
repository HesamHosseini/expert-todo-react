const StyleManager = {
  Priority(key) {
    let style;
    switch (key) {
      case "Low":
        style = "rounded-full p-1 bg-[#f8f9fa] text-[#000]";
        break;
      case "High":
        style = "rounded-full p-1 bg-[#dc3545] text-[#fff]";
        break;
      case "Medium":
        style = "rounded-full p-1 bg-[#ffc107] text-[#fff]";
        break;
      default:
        console.log({ error: "That was wrong!" });
        break;
    }
    return style;
  },
  Status(key) {
    let style;
    switch (key) {
      case "Todo":
        style = "rounded-full p-1 bg-[#dc3545] text-[#fff]";
        break;
      case "Doing":
        style = "rounded-full p-1 bg-[#ffc107] text-[#fff]";
        break;
      case "Done":
        style = "rounded-full p-1 bg-[#198754] text-[#fff]";
        break;
      default:
        console.log({ error: "That was wrong!" });
        break;
    }
    return style;
  },
};

export default StyleManager;
