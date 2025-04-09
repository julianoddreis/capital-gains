#!/usr/bin/env node

const args = process.argv.slice(2);
const command = args[0];

function showHelp() {
  console.log(`
Capital Gains Calculator

Usage:
  node main.js <command>

Commands:
  calculate    Calculate capital gains
  help        Show this help message

Examples:
  node main.js calculate
  node main.js help
`);
}

function calculateGains() {
  console.log("Calculating capital gains...");
  // Here will be implemented the calculation logic
}

switch (command) {
  case "calculate":
    calculateGains();
    break;
  case "help":
  default:
    showHelp();
    break;
}
