(require 'cljs.build.api)

(cljs.build.api/build "src" {:optimizations :whitespace :output-dir "out" :output-to "hello.js" :source-map "hello.js.map"})
