module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),
        sass: {
            dist: {
                options: {
                    style: "compressed"
                },
                files: {
                    "css/main.css" : "sass/main.scss"
                }
            },

            dev: {
                options: {
                    style: "expanded"
                },
                files: {
                    "css/main.css" : "sass/main.scss"
                }
            }

        },
        watch: {
            options: {
                livereload: true
            },
            php: {
                files: ["dev/*.php"]
            },
            scss: {
                files: ["sass/*.scss", "sass/**/*.scss"],
                tasks: ["sass:dev"]
            },
            html: {
                files: ["*.html"]
            },
            js: {
                files: ["js/*.js"]
            }
        },
        connect: {
            server: {
                options: {
                    livereload: true,
                    base: "",
                    port: 9000
                }
            }
        }
    });

    grunt.loadNpmTasks("grunt-contrib-sass");
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks("grunt-contrib-connect");

    grunt.registerTask("serve", ["connect:server", "watch"]);
};