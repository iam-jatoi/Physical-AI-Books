#!/usr/bin/env node

/**
 * Content Validation Script for Physical AI Book
 * Validates that all lesson content meets quality standards
 */

const fs = require('fs');
const path = require('path');

// Define the docs directory to validate
const DOCS_DIR = path.join(__dirname, '../../docs/physical-ai-book');

function validateFrontmatter(content, filePath) {
  const errors = [];
  
  // Check if frontmatter exists
  if (!content.includes('---')) {
    errors.push('Missing frontmatter (---)');
    return errors;
  }
  
  // Extract frontmatter
  const frontmatterMatch = content.match(/---\n([\s\S]*?)\n---/);
  if (!frontmatterMatch) {
    errors.push('Invalid frontmatter format');
    return errors;
  }
  
  const frontmatter = frontmatterMatch[1];
  
  // Check required fields
  if (!frontmatter.includes('title:')) {
    errors.push('Missing required field: title');
  }
  
  if (!frontmatter.includes('description:')) {
    errors.push('Missing required field: description');
  }
  
  if (!frontmatter.includes('sidebar_position:')) {
    errors.push('Missing required field: sidebar_position');
  }
  
  return errors;
}

function validateContent(content, filePath) {
  const errors = [];
  
  // Check for learning objectives
  if (!content.toLowerCase().includes('learning objectives')) {
    errors.push('Content should include learning objectives section');
  }
  
  // Check for prerequisites
  if (!content.toLowerCase().includes('prerequisites')) {
    errors.push('Content should include prerequisites section');
  }
  
  // Check for minimum content length
  const textContent = content.replace(/```[\s\S]*?```/g, '').replace(/<!--[\s\S]*?-->/g, '');
  if (textContent.length < 500) {
    errors.push('Content appears to be too short (< 500 characters of actual content)');
  }
  
  return errors;
}

function validateFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const frontmatterErrors = validateFrontmatter(content, filePath);
  const contentErrors = validateContent(content, filePath);
  
  return {
    filePath,
    errors: [...frontmatterErrors, ...contentErrors]
  };
}

function validateDirectory(dirPath) {
  const results = [];
  
  const items = fs.readdirSync(dirPath);
  
  for (const item of items) {
    const itemPath = path.join(dirPath, item);
    const stat = fs.statSync(itemPath);
    
    if (stat.isDirectory()) {
      results.push(...validateDirectory(itemPath));
    } else if (item.endsWith('.md') || item.endsWith('.mdx')) {
      results.push(validateFile(itemPath));
    }
  }
  
  return results;
}

// Run validation
console.log('Validating Physical AI Book content...\n');

const validationResults = validateDirectory(DOCS_DIR);

let totalErrors = 0;
let validFiles = 0;

for (const result of validationResults) {
  if (result.errors.length > 0) {
    console.log(`❌ ${result.filePath}`);
    for (const error of result.errors) {
      console.log(`   • ${error}`);
    }
    console.log('');
    totalErrors += result.errors.length;
  } else {
    validFiles++;
    console.log(`✅ ${result.filePath}`);
  }
}

console.log('\nValidation Summary:');
console.log(`Valid files: ${validFiles}`);
console.log(`Files with errors: ${validationResults.length - validFiles}`);
console.log(`Total errors: ${totalErrors}`);

if (totalErrors > 0) {
  process.exit(1); // Exit with error code if validation failed
} else {
  console.log('All content passed validation!');
  process.exit(0);
}