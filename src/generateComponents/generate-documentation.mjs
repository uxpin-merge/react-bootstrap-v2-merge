import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';
import { parse } from 'react-docgen';

// Construct __dirname equivalent in ES Module
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Now use __dirname to define the path to the JSON file
const componentJsonPath = path.join(__dirname, 'component-data.json');

const componentFolder = './componentsSrc/';

const componentDataArray = [];

function pushComponent(component) {
  componentDataArray.push(component);
}

function createComponentFile() {
  const componentJsonArray = JSON.stringify(componentDataArray, null, 2);
  fs.writeFile(componentJsonPath, componentJsonArray, 'utf8', (err) => {
    if (err) {
      throw err;
    }
    console.log('Created component file');
  });
}

function parseComponent(component, filename) {
  const componentInfo = parse(component);
  const splitIndex = filename.indexOf('/src/');
  const shortname = filename.substring(splitIndex + 4);

  componentInfo.filename = shortname;

  pushComponent(componentInfo);
}

function loadComponent(file, resolve) {
  fs.readFile(file, (err, data) => {
    if (err) {
      throw err;
    }

    resolve(parseComponent(data, file));
  });
}

function filewalker(dir, done) {
  let results = [];

  fs.readdir(dir, async (err, list) => {
    if (err) return done(err);

    let pending = list.length;

    if (!pending) return done(null, results);

    list.forEach((file) => {
      file = path.resolve(dir, file);

      fs.stat(file, async (err, stat) => {
        if (stat && stat.isDirectory()) {
          filewalker(file, (err, res) => {
            results = results.concat(res);
            if (!--pending) done(null, results);
          });
        } else {
          if (file.endsWith('.js') && !file.endsWith('.story.js') && !file.endsWith('.test.js')) {
            await new Promise((resolve) => {
              loadComponent(file, resolve);
            });
            results.push(file);
            if (!--pending) done(null, results);
          }
        }
      });
    });
  });
}

filewalker(componentFolder, (err, data) => {
  if (err) {
    throw err;
  }

  createComponentFile();
});
