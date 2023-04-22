const permissions = require(`${process.cwd()}/src/stuff/permissions`);
require("colors")

module.exports.parsePermissions = parsePermissions;


// parsePermissions
function parsePermissions(perms) {
  const permissionWord = `permission${perms.length > 1 ? "s" : ""}`;
  return perms.map((perm) => `\`${permissions[perm]}\` `).join(", ") + permissionWord;
}