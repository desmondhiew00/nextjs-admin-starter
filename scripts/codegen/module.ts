import path from "node:path";
import inquirer from "inquirer";
import pluralize from "pluralize";
import { camelCase, kebabCase, pascalCase } from "./core/case-anything";
import { OverwriteStrategy, generateFiles } from "./core/generate-files";

(async () => {
  const { choices, module, override } = await inquirer.prompt([
    {
      type: "checkbox",
      name: "choices",
      message: "What do you want to generate?",
      choices: [
        { name: "Table", value: "table", checked: true },
        { name: "Form", value: "form", checked: true },
      ],
    },
    {
      type: "input",
      name: "module",
      message: "Please enter the module name:",
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
  };

  if (choices.includes("table")) {
    const templates = path.join(__dirname, "templates/module-table");
    generateFiles(templates, "./", data, {
      overwriteStrategy: override ? OverwriteStrategy.Overwrite : OverwriteStrategy.KeepExisting,
    });
  }

  if (choices.includes("form")) {
    const templates = path.join(__dirname, "templates/module-form");
    generateFiles(templates, "./", data, {
      overwriteStrategy: override ? OverwriteStrategy.Overwrite : OverwriteStrategy.KeepExisting,
    });
  }
})();
