const fs = require('fs');
const path = require('path');

// Load and parse the JSON file
const components = require('./component-data.json');

// Helper function to generate component files
function generateFilesForComponent(displayName, props) {
    const componentDir = `./components-output/${displayName}`;
    const presetsDir = `${componentDir}/Presets`;

    if (!fs.existsSync(componentDir)) {
        fs.mkdirSync(componentDir, { recursive: true });
    }

    if (!fs.existsSync(presetsDir)) {
        fs.mkdirSync(presetsDir, { recursive: true });
    }

    const componentContent = generateComponentFileContent(displayName, props);
    const presetContent = generatePresetFileContent(displayName);

    fs.writeFileSync(`${componentDir}/${displayName}.jsx`, componentContent);

    // This creates the Presets files.
    // For meaningful presets Ai output here:
    // https://chat.openai.com/share/d7f79c7a-b6f0-4352-950f-bb5bc961d937 
    fs.writeFileSync(`${presetsDir}/0-default.jsx`, presetContent);
}

// Helper function to generate component file content
function generateComponentFileContent(displayName, props) {
    // Documentation block with dynamic component name
    const uxpDocComment = `/**
* @uxpindocurl https://react-bootstrap.github.io/docs/components/${displayName}
* @uxpindescription TODO
*/\n`;
    // Start with children prop to ensure it's always included
    let propTypes = `children: PropTypes.node,\n`;

    if (props) { // Check if props is defined and not null
        propTypes += Object.entries(props).map(([propName, propDetails]) => {
            if (propName === 'children') {
                // Skip the children prop, as it's already added at the start
                return '';
            }
            const propNameFormatted = propName.includes('-') ? `"${propName}"` : propName; // Enclose in quotes if propName includes a dash
            const description = propDetails.description ? `/** ${propDetails.description.replace(/@type \{\(.+\)\}/, '').trim()} */\n  ` : '';
            return `${description}${propNameFormatted}: ${convertTypeToPropTypes(propDetails)},`;
        }).filter(Boolean).join('\n  '); // Filter out empty strings if children prop was skipped
    } else {
        console.warn(`Props are undefined for component: ${displayName}`);
    }

    // Component template with propTypes including children
    return `
import React from 'react';
import PropTypes from 'prop-types';
import { ${displayName} as ${displayName}M } from 'react-bootstrap';

${uxpDocComment}

const ${displayName} = (props) => {
  return <${displayName}M {...props} />;
};

${displayName}.propTypes = {
  ${propTypes}
};

export default ${displayName};
    `.trim();
}



// Helper function to generate preset file content
function generatePresetFileContent(displayName) {
    return `
import React from 'react';
import ${displayName} from '../${displayName}';

export default (
  <${displayName} uxpId='${displayName.toLowerCase()}-1'>
    {/* Insert children or other props here */}
  </${displayName}>
);
  `.trim();
}

// Convert JSON prop types to PropTypes with consideration for special type annotations
function convertTypeToPropTypes(propDetails) {
    // Handle missing type or specific types with a default of PropTypes.string
    let defaultType = 'PropTypes.string'; // Default to PropTypes.string for missing or specific types
    if (!propDetails || !propDetails.type || ['enum', 'any', 'elementType', 'union', ''].includes(propDetails.type.name)) {
        return defaultType;
    }

    let typeString = defaultType; // Initialize with defaultType, which is PropTypes.string

    const typeAnnotationMatch = propDetails.description ? propDetails.description.match(/@type \{\((.+)\)\}/) : null;
    if (typeAnnotationMatch) {
        const types = typeAnnotationMatch[1].split('|').map(type => `'${type.trim().replace(/'/g, "")}'`);
        typeString = `PropTypes.oneOf([${types.join(', ')}])`;
    } else {
        // Ensure 'PropTypes.' prefix for other types, defaulting to string for unsupported or missing types
        typeString = `PropTypes.${propDetails.type.name || 'string'}`;
    }

    return typeString;
}

// Generate files for each component
Object.entries(components).forEach(([filePath, componentData]) => {
    componentData.forEach(({ displayName, props }) => {
        generateFilesForComponent(displayName, props);
    });
});

console.log('Component files generated successfully.');