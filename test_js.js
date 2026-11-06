/**
 * Universal JavaScript Suite Syntax & Load Tester
 */
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const baseDir = path.join(__dirname, 'JavaScript');
const subdirs = ['a_basic', 'b_intermediate', 'c_advanced', 'd_dsa'];

console.log('='.repeat(70));
console.log('🚀 RUNNING JAVASCRIPT PRACTICE & DSA SYNTAX VALIDATION');
console.log('='.repeat(70));

let total = 0;
let passed = 0;
const errors = [];

for (const sub of subdirs) {
  const dirPath = path.join(baseDir, sub);
  if (!fs.existsSync(dirPath)) continue;

  const files = fs.readdirSync(dirPath).filter(f => f.endsWith('.js'));
  console.log(`\n📂 [${sub.toUpperCase()}] (${files.length} files)`);
  console.log('-'.repeat(70));

  for (const file of files) {
    total++;
    const fullPath = path.join(dirPath, file);
    try {
      execSync(`node --check "${fullPath}"`, { stdio: 'pipe' });
      passed++;
      console.log(`  ✅ [PASS] ${file}`);
    } catch (err) {
      errors.push({ file: `${sub}/${file}`, err: err.stderr.toString() });
      console.log(`  ❌ [FAIL] ${file}`);
    }
  }
}

console.log('\n' + '='.repeat(70));
console.log(`🏁 SUMMARY: ${passed}/${total} Passed (${((passed / total) * 100).toFixed(1)}%)`);
console.log('='.repeat(70));

if (errors.length > 0) {
  console.log('\nErrors:');
  for (const e of errors) {
    console.log(`\n--- ${e.file} ---`);
    console.log(e.err);
  }
}
