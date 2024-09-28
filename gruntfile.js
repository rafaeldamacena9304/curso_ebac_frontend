module.exports = function(grunt){
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        less:{
            dist:{
                options:{
                    compress:true
                },
                files:{
                    './dist/styles/main.min.css': './src/styles/main.less'
                }
            }
        },
        htmlmin:{
            dist:{
                options:{
                    removeComments: true,
                    collapseWhitespace: true
                },
                files:[{
                    expand:true,
                    cwd: 'src/html/',
                    src: ['**/*.html'],
                    dest:'dist/html/'
                }]
            }

        },
        uglify:{
            target:{
                files: [{
                    expand:true,
                    cwd: 'src/scripts',
                    src: ['**/*.js'],
                    dest: 'dist/scripts'
                }]
            }
        },
        concurrent:{
            target:['less','htmlmin','uglify']
        }

    })
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-concurrent');
    grunt.registerTask('default', ['concurrent']);
}