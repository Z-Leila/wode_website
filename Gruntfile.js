module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        transport: {

            options: {
                paths : ['.'],
                alias: {
                    "jquery":"/js/vendor/jquery-1.10.2.min.js",
                    "index": "/js/app/index.js"
                }
            },
            styles : {
                options : {
                    idleading : '/aaa/'
                },
                files : [
                    {
                        cwd:'js/app/',
                        src:'**',
                        filter: 'isFile',
                        expand: true,
                        dest:'aaa'
                    }
                ]
            }
        }
        //concat: {
        //    options: {
        //        include: 'relative'
        //    },
        //    build: {
        //        files: {
        //            //'dist/helloworld/klass.js': ['.build/helloworld/klass.js', '.build/helloworld/circle.js'],
        //            //'dist/main/index.js': ['.build/main/index.js'],
        //            //'dist/lib/jquery-debug.js':['.build/lib/jquery-debug.js']
        //        }
        //    }
        //},
        //uglify: {
        //    main: {
        //        files: {
        //            //'dist/helloworld/klass.js': ['dist/helloworld/klass.js'],
        //            //'dist/main/index.js': ['dist/main/index.js'],
        //            //'dist/lib/jquery-debug.js':['dist/lib/jquery-debug.js']
        //        }
        //    }
        //}
        //clean:  {
        //    build: ['.build'] // clean .build directory
        //}
    });
    grunt.loadNpmTasks('grunt-cmd-transport');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.registerTask("test","my custom task",function(){
        console.log("hello grunt");
    });
    grunt.registerTask('default', ['transport']);
};