# Contributing to LuckyChatAI

Thank you for considering contributing to LuckyChatAI! We welcome contributions from the community.

## How to Contribute

### Reporting Bugs

If you find a bug, please open an issue with:
- A clear, descriptive title
- Steps to reproduce the bug
- Expected behavior
- Actual behavior
- Screenshots (if applicable)
- Your environment (OS, browser, Node version)

### Suggesting Enhancements

We love new ideas! Please open an issue with:
- A clear, descriptive title
- Detailed description of the proposed feature
- Why this enhancement would be useful
- Possible implementation approach

### Pull Requests

1. **Fork** the repository
2. **Clone** your fork:
   \`\`\`bash
   git clone https://github.com/YOUR_USERNAME/LuckyChatAi.git
   \`\`\`

3. **Create a branch** for your feature:
   \`\`\`bash
   git checkout -b feature/amazing-feature
   \`\`\`

4. **Make your changes** following our coding standards
5. **Test your changes** thoroughly
6. **Commit your changes**:
   \`\`\`bash
   git commit -m 'Add amazing feature'
   \`\`\`

7. **Push to your fork**:
   \`\`\`bash
   git push origin feature/amazing-feature
   \`\`\`

8. **Open a Pull Request** with:
   - Clear title and description
   - Reference to related issues
   - Screenshots (if UI changes)

## Code Style Guide

- Use **ES6+** JavaScript features
- Follow **ESLint** configuration
- Use **meaningful variable names**
- Add **comments** for complex logic
- Write **clean, readable code**

### File Naming
- React components: PascalCase (e.g., `CustomModal.js`)
- Utility files: camelCase (e.g., `firebaseConfig.js`)
- CSS modules: kebab-case (e.g., `auth.module.css`)

### Component Structure
\`\`\`javascript
// 1. Imports
import { useState } from 'react';

// 2. Component definition
export default function MyComponent() {
    // 3. State and hooks
    const [state, setState] = useState();
    
    // 4. Handlers
    const handleClick = () => {};
    
    // 5. Render
    return <div>...</div>;
}
\`\`\`

## Testing

Before submitting a PR:
- Test all new features
- Ensure existing functionality still works
- Test on different browsers (Chrome, Firefox, Safari)
- Test responsive design on mobile devices

## Environment Setup

1. Install dependencies: \`npm install\`
2. Set up \`.env.local\` with required credentials
3. Run dev server: \`npm run dev\`

## Questions?

Feel free to reach out:
- Open an issue for project-related questions
- Email: badewolegoodluck55@gmail.com

## Code of Conduct

- Be respectful and inclusive
- Provide constructive feedback
- Focus on what is best for the community
- Show empathy towards other community members

Thank you for contributing! 🎉
