#!/usr/bin/env node

import esbuildServe from "esbuild-serve";
import open from 'open'

esbuildServe(
  {
    logLevel: "info",
    entryPoints: ["src/index.ts"],
    bundle: true,
    outfile: "dist/main.js",
    
  },
  { 
    root: "dist",
    port: "3001",
  }
).then((res) => {
  open("http://localhost:3001")
    
})

