module.exports = function(results) {
  let output = "",
      total = 0;

  results.forEach(result => {
    const messages = result.messages;
    total += messages.length;
    output += `${result.filePath}\n`;
    messages.forEach(message => {
      output += `   line ${message.line || 0}`;
      output += ` col ${message.column || 0}`;
      output += ` - ${message.message}`;
      output += message.ruleId ? ` (${message.ruleId})` : "";
      output += "\n";
    });
  });

  if (total > 0) {
    output += `\n${total} problem${total !== 1 ? "s" : ""}`;
  }

  return output;
};
