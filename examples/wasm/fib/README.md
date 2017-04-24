# Binaryen and patches

Build binaryen with https://github.com/WebAssembly/binaryen/commit/0b67e96f598c817061e243aa922783b49f0cecab


**GIST**: https://gist.github.com/yurydelendik/37bf1589939ea8a514a9233f31f0f48e#file-fib-index-html

# Compile a program using emscripten

```
emcc -s SIDE_MODULE=1 fib.c -O1 --separate-asm -g -o fib.js
cat fib.asm.js | grep " //@line "
```

# Create a wasm file with text map

```
asm2wasm -g fib.asm.js -o fib.wasm -bm fib.wasm.txtmap -bu http://example.org/fib.wasm.map
cat fib.wasm.txtmap
```

# Convert to JSON map

(If the txt2map4wasm not install, you can install it via `npm install txt2map4wasm`)

```
txt2map4wasm fib.wasm.txtmap -o fib.wasm.map
```
