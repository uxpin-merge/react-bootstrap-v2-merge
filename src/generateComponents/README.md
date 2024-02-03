# Merge wrapper and preset files automation


- To create components from component-data.json

 node generateComponents.js 


- To create component data:

Use docgen cli. Point to component code:

npx @react-docgen/cli ./src/components/**/*.jsx -o component-data.json


- To create meaningful presets:

Use this gpt promp https://chat.openai.com/share/d7f79c7a-b6f0-4352-950f-bb5bc961d937 