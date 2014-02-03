# grunt-mustache-mustache

> Render mustache files with data sources

## Getting Started
This plugin requires Grunt `~0.4.2`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-mustache-mustache --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-mustache-mustache');
```

## The "mustache_mustache" task

### Overview
In your project's Gruntfile, add a section named `mustache_mustache` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  options: {
    // task level options
    partials: "",
    data: ""
  },
  target: {
    src: "",
    dest: ""
  }
});
```

### Options

#### options.partials
Type: `String`
Default value: `''`

The root directory to look for partials.

#### options.data
Type: `String`
Default value: `''`

The global data scope for rendering will be consist of the json files found in this directory.
Every json will be available with its name as a root property.

A structure like this:

    data/
      people.json
      colors.json

will translate to:

    {
      people: the parsed contents of people.json,
      colors: the parsed contents of colors.json
    }

### Usage Examples

#### Default Options

```js
grunt.initConfig({
  mustache_mustache: {
    options: {},
    partials: {
      src: "some/path/partials.mustache",
      dest: "other/partials.mustache"
    }
  },
});
```

#### Custom Options
Specify a partial folder to use partials in your templates.
Partials can be nested in folders, in that case, you can refer to them in templates like `{{> nested/partial}}`.

From the data root, every json file will be collected and merged into a single object, and will be used as the
root rendering context. Nested jsons will be ignored.

```js
grunt.initConfig({
  mustache_mustache: {
    options: {
      partials: "test/partials/",
      data: "test/data/"
    },
    globbing: {
      expand: true,
      cwd: "some/path/",
      src: ["*.mustache"],
      dest: "tmp/"
    }
  },
});
```