/*
 * grunt-mustache
 * https://github.com/tunderdomb/grunt-mustache
 *
 * Copyright (c) 2014 tunderdomb
 * Licensed under the MIT license.
 */

'use strict';

var mustache = require("mustache")
  , path = require('path')

module.exports = function ( grunt ){

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerMultiTask('mustache_mustache', 'A grunt mustache plugin to render mustache files with optional data sources.', function (){
    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({
      partials: "",
      data: {}
    })
    // Iterate over all specified file groups.
    this.files.forEach(function ( fileGroups ){
      // Render mustache files.
      var src = fileGroups.src.filter(function ( filepath ){
        // Warn on and remove invalid source files (if nonull was set).
        if ( !grunt.file.exists(filepath) ) {
          grunt.log.warn('Source file "' + filepath + '" not found.')
          return false
        }
        grunt.file.write(fileGroups.dest, mustache.render(grunt.file.read(src), options.data, function( name ){
          var filePath = path.join(options.partials, name+".mustache")
          if (grunt.file.exists(filePath)) {
            return grunt.file.read(filePath)
          }
          return ""
        }))
        console.log("Rendered mustache: "+src + " to "+fileGroups.dest)
        return true
      })
    })
  })
};
