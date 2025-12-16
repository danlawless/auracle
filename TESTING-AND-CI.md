# Testing & CI/CD Setup Guide

Complete testing and continuous integration setup for the Auracle project.

## 📦 What's Installed

### Testing Framework
- **Jest** - Test runner with Next.js integration
- **React Testing Library** - Component testing utilities
- **jest-dom** - Custom Jest matchers for DOM assertions

### Code Quality Tools
- **ESLint** - JavaScript/TypeScript linting
- **Prettier** - Code formatting
- **lint-staged** - Run linters on git staged files
- **Husky** - Git hooks for pre-commit and commit-msg validation

### CI/CD
- **GitHub Actions** - Automated workflows for testing, building, and deployment
- **Claude AI** - AI-powered code review on pull requests

## 🚀 Available Scripts

### Development
```bash
npm run dev              # Start development server
npm run build            # Build for production
npm run start            # Start production server
```

### Testing
```bash
npm run test             # Run tests in watch mode
npm run test:ci          # Run tests once with coverage (for CI)
npm run test:coverage    # Run tests with coverage report
```

### Code Quality
```bash
npm run lint             # Check code for issues
npm run lint:fix         # Auto-fix linting issues
npm run format           # Format all files with Prettier
npm run format:check     # Check if files are formatted
npm run type-check       # Run TypeScript type checking
npm run validate         # Run all checks (type-check + lint + format)
```

### Git Hooks
```bash
npm run pre-commit       # Manually run pre-commit checks
npm run prepare          # Install husky hooks (runs automatically)
```

## 🔧 Setup Instructions

### 1. Install Dependencies

First time setup:
```bash
cd /Users/lawl3ss/Documents/Projects/Auracle
npm install
```

This will:
- Install all dependencies from package.json
- Set up Husky git hooks automatically
- Configure pre-commit and commit-msg hooks

### 2. Initialize Husky (if needed)

If hooks aren't working:
```bash
npm run prepare
chmod +x .husky/pre-commit .husky/commit-msg
```

### 3. Verify Installation

Test that everything works:
```bash
# Check linting
npm run lint

# Check types
npm run type-check

# Run tests
npm run test:ci

# Run all validations
npm run validate
```

## 📝 Writing Tests

### Test File Structure

Place test files:
- In `__tests__/` directory (recommended)
- Next to components with `.test.tsx` or `.spec.tsx` suffix

Example structure:
```
app/
  components/
    Button.tsx
    __tests__/
      Button.test.tsx
    
__tests__/
  integration/
    auth.test.tsx
```

### Basic Test Pattern

```typescript
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MyComponent } from '@/app/components/MyComponent';

describe('MyComponent', () => {
  it('should render correctly', () => {
    render(<MyComponent />);
    expect(screen.getByText('Expected Text')).toBeInTheDocument();
  });

  it('should handle user interactions', async () => {
    const handleClick = jest.fn();
    render(<MyComponent onClick={handleClick} />);
    
    const button = screen.getByRole('button');
    await userEvent.click(button);
    
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
```

### Testing Hooks

```typescript
import { renderHook, act } from '@testing-library/react';
import { useMyHook } from '@/hooks/useMyHook';

describe('useMyHook', () => {
  it('should update state correctly', () => {
    const { result } = renderHook(() => useMyHook());
    
    act(() => {
      result.current.updateValue('new value');
    });
    
    expect(result.current.value).toBe('new value');
  });
});
```

### Async Testing

```typescript
import { waitFor } from '@testing-library/react';

it('should load data asynchronously', async () => {
  render(<AsyncComponent />);
  
  expect(screen.getByText('Loading...')).toBeInTheDocument();
  
  await waitFor(() => {
    expect(screen.getByText('Data loaded')).toBeInTheDocument();
  });
});
```

## 🎯 Coverage Goals

Current targets (defined in jest.config.js):
- **Branches**: 70%
- **Functions**: 70%
- **Lines**: 70%
- **Statements**: 70%

View coverage report:
```bash
npm run test:coverage
open coverage/lcov-report/index.html
```

## 🔒 Git Hooks

### Pre-commit Hook

Runs automatically before each commit:
1. **lint-staged** - Lints and formats only staged files
2. **Type checking** - Ensures no TypeScript errors

What it checks:
- ESLint fixes on `.ts`, `.tsx`, `.js`, `.jsx` files
- Prettier formatting on all supported files
- TypeScript compilation

### Commit Message Hook

Validates commit message format:
- Must start with emoji (optional) or capital letter
- Minimum 10 characters
- Should follow format: `[emoji] Imperative verb + description`

✅ Valid examples:
```
✨ Add user authentication
🐛 Fix navigation bug
Add user profile page
```

❌ Invalid examples:
```
fixed bug          # Too short
added feature      # Not imperative mood
wip                # Not descriptive
```

## 🤖 GitHub Actions Workflows

### CI Pipeline (.github/workflows/ci.yml)

Runs on every push and PR:

**1. Lint & Type Check**
- ESLint validation
- TypeScript type checking

**2. Build**
- Production build test
- Build artifact verification

**3. Tests**
- Jest test suite
- Coverage reporting

**4. Quality Check**
- Console.log detection
- Bundle size analysis

**5. Security Scan**
- npm audit
- Secret detection

### Claude AI Code Review (.github/workflows/claude.yml)

Triggers when:
- Comment contains `@claude` on issues or PRs
- Pull request review mentions `@claude`

What Claude does:
- Reviews code changes
- Suggests improvements
- Checks against coding standards
- Identifies potential issues

Usage:
```
# On a PR or issue, comment:
@claude review this code
@claude check for security issues
@claude suggest improvements
```

### Dependabot (.github/dependabot.yml)

Automatically:
- Checks for dependency updates
- Creates PRs for security patches
- Keeps dependencies up to date

## 📋 Pre-commit Checklist

Before committing code, ensure:

- [ ] Code is formatted (`npm run format`)
- [ ] No linting errors (`npm run lint`)
- [ ] TypeScript compiles (`npm run type-check`)
- [ ] Tests pass (`npm run test:ci`)
- [ ] New code has tests
- [ ] Commit message follows format

Or run everything at once:
```bash
npm run validate && npm run test:ci
```

## 🚨 Troubleshooting

### Husky hooks not running

```bash
# Reinstall husky
rm -rf .husky
npm run prepare
chmod +x .husky/pre-commit .husky/commit-msg
```

### Tests failing in CI but passing locally

```bash
# Run tests exactly as CI does
npm ci  # Clean install
npm run test:ci
```

### Pre-commit is slow

```bash
# Only staged files are checked
# If still slow, check what's staged:
git status

# To skip hooks in emergency (not recommended):
git commit --no-verify
```

### Type errors in tests

```bash
# Make sure jest types are available
npm install --save-dev @types/jest

# Check tsconfig includes test files
```

## 🎓 Best Practices

### Test Organization
1. Group related tests in `describe` blocks
2. Use clear, descriptive test names
3. Follow AAA pattern: Arrange, Act, Assert
4. Keep tests focused and independent

### Code Quality
1. Fix lint errors immediately
2. Run `npm run validate` before pushing
3. Write tests for new features
4. Maintain coverage above 70%

### Git Workflow
1. Write meaningful commit messages
2. Let pre-commit hooks run (don't skip)
3. Review CI results before merging
4. Address bot feedback thoughtfully

### CI/CD
1. Keep workflows fast (< 5 min ideal)
2. Fix failing builds immediately
3. Monitor coverage trends
4. Update dependencies regularly

## 📊 Continuous Improvement

### Monitoring
- Check GitHub Actions for build status
- Review coverage reports weekly
- Track technical debt
- Monitor bundle size

### Updates
```bash
# Check for outdated dependencies
npm outdated

# Update non-breaking changes
npm update

# For major updates, review changelogs first
```

## 🎉 You're All Set!

Your Auracle project now has:
- ✅ Comprehensive testing setup
- ✅ Automated code quality checks
- ✅ Git hooks for consistency
- ✅ CI/CD pipeline
- ✅ AI-powered code review

Start writing tests and let the automation handle the rest!

---

**Pro Tips:**
- Use `npm run validate` before pushing
- Let Claude review complex PRs with `@claude`
- Check coverage reports to find untested code
- Keep tests fast and focused

