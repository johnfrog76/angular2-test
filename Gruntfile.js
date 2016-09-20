module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            options: {
                stripBanners: true,
                // banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
                //   '<%= grunt.template.today("yyyy-mm-dd") %> */',
                banner: ''
            },
            dist: {
                src: [
                    'node_modules/core-js/client/shim.min.js',
                    'node_modules/zone.js/dist/zone.js',
                    'node_modules/reflect-metadata/Reflect.js',
                    'node_modules/systemjs/dist/system.src.js',
                    'node_modules/ng2-bootstrap/bundles/ng2-bootstrap.min.js'
                ],
                dest: 'dist/libs/js/all-libs.js'
            }
        },

        copy: {
            main: {
                files: [{
                    expand: true,
                    flatten: true,
                    cwd: 'node_modules/bootstrap/dist/css/',
                    src: ['**'],
                    dest: 'dist/libs/css'
                }, {
                    expand: true,
                    flatten: true,
                    cwd: 'node_modules/bootstrap/dist/fonts/',
                    src: ['**'],
                    dest: 'dist/libs/fonts/'
                }, {
                    expand: true,
                    flatten: true,
                    cwd: 'node_modules/font-awesome/css/',
                    src: ['**'],
                    dest: 'dist/libs/css/'
                }, {
                    expand: true,
                    flatten: true,
                    cwd: 'node_modules/font-awesome/fonts/',
                    src: ['**'],
                    dest: 'dist/libs/fonts/'
                },
                {
                    cwd: 'app',
                    src: '**/*.html',
                    dest: 'dist/app',
                    expand: true ,
                    flatten: true
                },
                {
                    cwd: 'app',
                    src: '**/*.css',
                    dest: 'dist/app',
                    expand: true ,
                    flatten: true
                },
                {
                    src: 'styles.css',
                    dest: 'dist/styles.css'
                },
                {
                    src: 'production.html',
                    dest: 'dist/index.html'
                }]
            }
        },

        uglify: {
            build: {
                src: ['dist/libs/js/all-libs.js'],
                dest: 'dist/libs/js/all-libs.min.js'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-copy');
    //grunt.loadNpmTasks('grunt-stripcomments');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['concat', 'copy', 'uglify']);
};
