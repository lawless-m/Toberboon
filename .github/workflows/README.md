# GitHub Actions Workflows

This directory contains automated CI/CD workflows for the Toberboon project.

## Workflows

### 1. Build TimberbornViewer (`build-viewer.yml`)

**Purpose:** Automatically builds the TypeScript Three.js viewer when viewer code changes.

**Triggers:**
- Push to `main`, `master`, or any `claude/**` branch
- Pull requests to `main` or `master`
- Only when files in `TimberbornViewer/` change

**What it does:**
1. Checks out the repository
2. Sets up Node.js 20
3. Installs npm dependencies (`npm ci`)
4. Builds the TypeScript project (`npm run build`)
5. Verifies the `dist/` folder was created
6. Uploads build artifacts (available for 30 days)

**Build artifacts:**
- Name: `viewer-dist`
- Contains: `TimberbornViewer/dist/` folder
- Download from: Actions tab → Select workflow run → Artifacts section

**Status badge:**
```markdown
![Build Viewer](https://github.com/USERNAME/Toberboon/workflows/Build%20TimberbornViewer/badge.svg)
```

### 2. Build TimberbornTerrainGenerator (`build-generator.yml`)

**Purpose:** Automatically builds the C# .NET terrain generator when generator code changes.

**Triggers:**
- Push to `main`, `master`, or any `claude/**` branch
- Pull requests to `main` or `master`
- Only when files in `TimberbornTerrainGenerator/` change

**What it does:**
1. Checks out the repository
2. Sets up .NET 8.0 SDK
3. Restores NuGet dependencies (`dotnet restore`)
4. Builds in Release configuration (`dotnet build`)
5. Verifies the build output
6. Uploads build artifacts (available for 30 days)

**Build artifacts:**
- Name: `generator-build`
- Contains: `bin/Release/net8.0/` folder
- Download from: Actions tab → Select workflow run → Artifacts section

**Status badge:**
```markdown
![Build Generator](https://github.com/USERNAME/Toberboon/workflows/Build%20TimberbornTerrainGenerator/badge.svg)
```

## Viewing Workflow Results

### On GitHub:
1. Go to your repository
2. Click the **Actions** tab
3. Select a workflow run
4. View logs and download artifacts

### Status indicators:
- ✅ Green checkmark = Build succeeded
- ❌ Red X = Build failed
- 🟡 Yellow dot = Build in progress

## Local Testing

Before pushing, you can test if builds will succeed:

### Test Viewer Build:
```bash
cd TimberbornViewer
npm ci
npm run build
```

### Test Generator Build:
```bash
cd TimberbornTerrainGenerator
dotnet restore
dotnet build --configuration Release
```

## Downloading Build Artifacts

If you need the built files from a workflow run:

1. Go to Actions tab
2. Select the workflow run
3. Scroll to "Artifacts" section
4. Click to download:
   - `viewer-dist.zip` - Contains built viewer
   - `generator-build.zip` - Contains compiled generator

## Workflow Configuration

### Caching

Both workflows use caching to speed up builds:
- **Viewer:** Caches npm packages
- **Generator:** Uses built-in .NET caching

### Parallel Execution

Workflows run independently:
- Changes to viewer only trigger viewer build
- Changes to generator only trigger generator build
- Changes to both trigger both builds (in parallel)

## Optional Features

### Auto-commit dist/ Files

The viewer workflow has an optional step (commented out) to automatically commit built files:

```yaml
# Uncomment in build-viewer.yml to enable:
- name: Commit dist/ files
  if: github.event_name == 'push' && github.ref == 'refs/heads/main'
  run: |
    git config --local user.email "github-actions[bot]@users.noreply.github.com"
    git config --local user.name "github-actions[bot]"
    git add TimberbornViewer/dist/ -f
    git diff --staged --quiet || git commit -m "Build: Update viewer dist/ files [skip ci]"
    git push
```

**Pros:**
- dist/ always up-to-date in repository
- Easy deployment (just pull and serve)

**Cons:**
- Creates extra commits
- Increases repository size

### Running Tests

Both workflows have commented-out test steps. To enable:

**Viewer:**
```yaml
- name: Test
  working-directory: TimberbornViewer
  run: npm test
```

**Generator:**
```yaml
- name: Test
  working-directory: TimberbornTerrainGenerator
  run: dotnet test --no-build --verbosity normal
```

## Troubleshooting

### Build fails on dependencies

**Viewer:** Update `package-lock.json`:
```bash
cd TimberbornViewer
npm install
git add package-lock.json
git commit -m "Update package-lock.json"
```

**Generator:** Check `.csproj` file for correct package references

### Build succeeds locally but fails in Actions

- Check Node.js/.NET versions match
- Ensure all files are committed (including `package-lock.json`)
- Check for OS-specific code (Actions uses Ubuntu)

### Artifacts not appearing

- Check workflow completed successfully
- Artifacts expire after 30 days
- Only available for completed runs

## Customization

### Change Node.js version:
```yaml
node-version: '20'  # Change to '18', '20', '21', etc.
```

### Change .NET version:
```yaml
dotnet-version: '8.0.x'  # Change to '7.0.x', '9.0.x', etc.
```

### Change artifact retention:
```yaml
retention-days: 30  # Change to 1-90 days
```

### Add more branches:
```yaml
branches: [ main, master, develop, 'claude/**', 'feature/**' ]
```

## Best Practices

1. **Keep workflows fast:** Use caching, run in parallel
2. **Test locally first:** Don't rely on Actions for debugging
3. **Clear commit messages:** Help future you understand what failed
4. **Monitor Actions usage:** Free tier has limits
5. **Use artifacts wisely:** They count toward storage limits

## Additional Resources

- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [Node.js Action](https://github.com/actions/setup-node)
- [.NET Action](https://github.com/actions/setup-dotnet)
- [Upload Artifact Action](https://github.com/actions/upload-artifact)

---

**Last Updated:** 2025-10-31
**Workflows:** 2 active
