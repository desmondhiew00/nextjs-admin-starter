import { exec, execSync } from "node:child_process";
import * as fs from "node:fs";
import * as path from "node:path";
import * as util from "node:util";
import * as signale from "signale";

const fsLogger = new signale.Signale({
  types: {
    created: {
      badge: "✔",
      color: "green",
      label: "created",
    },
    overwritten: {
      badge: "ℹ",
      color: "yellow",
      label: "overwrite",
    },
  },
});

/**
 * Get all the directories in a given path
 * @returns {Promise<string[]>} - An array of strings representing the directories in the given path
 */
export const getDirectories = async (srcPath: string, excludes: string[]): Promise<string[]> => {
  const values: string[] = [];
  await fs.promises.readdir(srcPath).then(async (files) => {
    for (const file of files) {
      const filePath = path.join(srcPath, file);
      await fs.promises.stat(filePath).then((stat) => {
        if (stat.isDirectory()) {
          if (!excludes.includes(file)) values.push(file);
        }
      });
    }
  });
  return values;
};

export const isDirectory = (source: string) => fs.lstatSync(source).isDirectory();

export const execAsync = async (cmd: string) => {
  const execPromise = util.promisify(exec);
  const { stdout } = await execPromise(cmd);
  return stdout.trim();
};

export const formatFiles = (file: string | string[]) => {
  if (Array.isArray(file)) {
    if (file.length === 0) return;
    const files = file.join(" ");
    execSync(`npx biome format --write ${files}`);
    return;
  }
  execSync(`npx biome format --write ${file}`);
};

export const tree = {
  root: process.cwd(),
  exists: (path: string) => {
    return fs.existsSync(path);
  },
  write: (path: string, content: string) => {
    const dirs = path.split("/");
    for (let i = 1; i < dirs.length; i++) {
      const dir = dirs.slice(0, i).join("/");
      if (dir === "") continue;
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir);
      }
    }

    const exists = fs.existsSync(path);
    fs.writeFileSync(path, content);
    if (exists) {
      fsLogger.overwritten(path.replace(`${tree.root}/`, ""));
    } else {
      fsLogger.created(path.replace(`${tree.root}/`, ""));
    }
  },
};
