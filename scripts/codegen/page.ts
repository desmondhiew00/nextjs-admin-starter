import path from "node:path";
import inquirer from "inquirer";
import pluralize from "pluralize";
import { camelCase, kebabCase, pascalCase } from "./core/case-anything";
import { OverwriteStrategy, generateFiles } from "./core/generate-files";

(async () => {
  const { choices, module, route, override } = await inquirer.prompt([
    {
      type: "checkbox",
      name: "choices",
      message: "What do you want to generate?",
      choices: [
        { name: "Table List Page", value: "list", checked: true },
        { name: "Form Page", value: "form", checked: true },
      ],
    },
    {
      type: "input",
      name: "route",
      message: "Please enter the route (exp: settings/users):",
    },
    {
      type: "input",
      name: "module",
      message: "Please enter the module name (exp: user):",
    },
    {
      type: "confirm",
      name: "override",
      message: "Do you want to override existing files?",
      default: false,
    },
  ]);

  const data = {
    camelCase,
    pascalCase,
    kebabCase,
    plural: (val: string) => pluralize.plural(val),
    singular: (val: string) => pluralize.singular(val),
    module: String(module).toLowerCase(),
    route: String(route).startsWith("/") ? route.slice(1) : route,
    parsedRoute: `/${String(route)
      .split("/")
      .filter((item) => !(item.startsWith("(") && item.endsWith(")")))
      .join("/")}`,
  };

  if (choices.includes("list")) {
    const templates = path.join(__dirname, "templates/page-list");
    generateFiles(templates, "./", data, {
      overwriteStrategy: override ? OverwriteStrategy.Overwrite : OverwriteStrategy.KeepExisting,
    });
  }

  if (choices.includes("form")) {
    const templates = path.join(__dirname, "templates/page-form");
    generateFiles(templates, "./", data, {
      overwriteStrategy: override ? OverwriteStrategy.Overwrite : OverwriteStrategy.KeepExisting,
    });
  }
})();
