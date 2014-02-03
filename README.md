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
In this example, the default options are used to do something with whatever. So if the `testing` file has the content `Testing` and the `123` file had the content `1 2 3`, the generated result would be `Testing, 1 2 3.`

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
In this example, custom options are used to do something else with whatever else. So if the `testing` file has the content `Testing` and the `123` file had the content `1 2 3`, the generated result in this case would be `Testing: 1 2 3 !!!`

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