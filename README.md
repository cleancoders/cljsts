# CLJSTS

ClojureScript library wrapper for JSTS : https://github.com/bjornharrtell/jsts

Current version wrapped: `2.12.1`

#### Rationale

The `cljsjs` version of the library died at version 1.6.0. Meanwhile, the JSTS library has evolved.

### Usage

Add the dependency to your `deps.edn`:

```Clojure
    io.github.cleancoders/cljsts   {:git/sha "7f9e246e078ad89721345b9e8ac661cb04a1d9b9"}
```

Require the library:

```Clojure
[com.cleancoders.cljsts]
```

### Development

The `jsts.min.js` can be found starting here: https://cdnjs.com/libraries/jsts

Generate the `jsts.ext.js` here: https://jmmk.github.io/javascript-externs-generator/
 * use `jsts` as the "extern object"
 * add `"getConvexHull": function () {}` to `ConvexHull`
 * add `"isCCW": function() {}` to `Orientation`

